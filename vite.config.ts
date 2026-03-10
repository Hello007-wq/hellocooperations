import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const OLLAMA_API_URL = 'https://ollama.com/api/chat';
const DEFAULT_MODEL = 'qwen3-coder-next';
const DEFAULT_SYSTEM_PROMPT =
  'You are the website assistant for Hello Co-Operations, a Harare-based tech company in Zimbabwe. Sound human, calm, and helpful. Keep replies short, clear, and conversational, usually 2 to 4 sentences. Do not use markdown, bullet points, numbered lists, asterisks, headings, emojis, or markdown links. Write like a real person chatting on a business website. Answer directly first and avoid long sales language. If asked about services, explain them in plain language. If asked about pricing, give rough starting prices in plain sentences and keep it brief. Use these anchors when relevant: simple business website 300 to 800 USD, professional company website 800 to 1500 USD, ecommerce website 1200 to 2500 USD, custom web app 1500 to 5000+ USD, branding package 150 to 600 USD, social media management 150 to 400 USD per month, SEO or digital marketing support 200 to 700 USD per month, mobile app MVP 2500 to 7000+ USD, simple automation 150 to 400 USD, mid-level automation 400 to 1200 USD, advanced automation or integrations 1200 to 3500+ USD. Always say the final price depends on scope, features, and timeline. If the user sounds ready to start, wants a formal quote, or wants to close a deal, tell them plainly to continue on the contact page at /contact. Do not say they can finalize the deal in the chat.';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'local-ollama-chat',
        configureServer(server) {
          server.middlewares.use('/api/chat', async (req, res, next) => {
            if (req.method !== 'POST') {
              next();
              return;
            }

            if (!env.OLLAMA_API_KEY) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ message: 'OLLAMA_API_KEY is not configured for local development.' }));
              return;
            }

            try {
              const bodyText = await new Promise<string>((resolve, reject) => {
                const chunks: Uint8Array[] = [];
                req.on('data', (chunk) => chunks.push(chunk));
                req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
                req.on('error', reject);
              });

              const requestBody = bodyText ? JSON.parse(bodyText) : {};
              const response = await fetch(OLLAMA_API_URL, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${env.OLLAMA_API_KEY}`,
                },
                body: JSON.stringify({
                  model: env.OLLAMA_MODEL || DEFAULT_MODEL,
                  stream: false,
                  messages: [
                    {
                      role: 'system',
                      content: env.OLLAMA_SYSTEM_PROMPT || DEFAULT_SYSTEM_PROMPT,
                    },
                    ...((requestBody.messages as Array<{ role?: string; content?: string }>) ?? []),
                  ],
                }),
              });

              const payloadText = await response.text();
              res.statusCode = response.status;
              res.setHeader('Content-Type', 'application/json');

              if (!response.ok) {
                res.end(payloadText || JSON.stringify({ message: 'The model request failed.' }));
                return;
              }

              let payload: Record<string, unknown> | null = null;
              if (payloadText) {
                try {
                  payload = JSON.parse(payloadText) as Record<string, unknown>;
                } catch {
                  payload = { response: payloadText };
                }
              }

              const messagePayload =
                payload && typeof payload.message === 'object' && payload.message !== null
                  ? (payload.message as Record<string, unknown>)
                  : null;

              const content =
                typeof messagePayload?.content === 'string'
                  ? messagePayload.content
                  : typeof payload?.response === 'string'
                    ? payload.response
                    : '';

              res.end(
                JSON.stringify({
                  output: content,
                  sessionId: typeof requestBody.sessionId === 'string' ? requestBody.sessionId : null,
                }),
              );
            } catch (error) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  message: error instanceof Error ? error.message : 'The server could not reach Ollama.',
                }),
              );
            }
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
      strictPort: true,
      host: true,
      allowedHosts: true,
    },
  };
});
