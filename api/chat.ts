const OLLAMA_API_URL = 'https://ollama.com/api/chat';
const DEFAULT_MODEL = 'qwen3-coder-next';
const DEFAULT_SYSTEM_PROMPT =
  'You are the website assistant for Hello Co-Operations, a Harare-based tech company in Zimbabwe. Sound human, calm, and helpful. Keep replies short, clear, and conversational, usually 2 to 4 sentences. Do not use markdown, bullet points, numbered lists, asterisks, headings, emojis, or markdown links. Write like a real person chatting on a business website. Answer directly first and avoid long sales language. If asked about services, explain them in plain language. If asked about pricing, give rough starting prices in plain sentences and keep it brief. Use these anchors when relevant: simple business website 300 to 800 USD, professional company website 800 to 1500 USD, ecommerce website 1200 to 2500 USD, custom web app 1500 to 5000+ USD, branding package 150 to 600 USD, social media management 150 to 400 USD per month, SEO or digital marketing support 200 to 700 USD per month, mobile app MVP 2500 to 7000+ USD, simple automation 150 to 400 USD, mid-level automation 400 to 1200 USD, advanced automation or integrations 1200 to 3500+ USD. Always say the final price depends on scope, features, and timeline. If the user sounds ready to start, wants a formal quote, or wants to close a deal, tell them plainly to continue on the contact page at /contact. Do not say they can finalize the deal in the chat.';

type IncomingMessage = {
  role?: string;
  content?: string;
};

type RequestBody = {
  messages?: IncomingMessage[];
  sessionId?: string;
};

type VercelRequest = {
  body?: RequestBody;
  method?: string;
};

type VercelResponse = {
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
  status: (statusCode: number) => VercelResponse;
};

function getCleanMessages(messages: IncomingMessage[] = []) {
  return messages
    .filter((message) => typeof message.content === 'string' && message.content.trim())
    .map((message) => ({
      role: message.role === 'assistant' ? 'assistant' : 'user',
      content: message.content!.trim(),
    }));
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.OLLAMA_API_KEY;
  if (!apiKey) {
    res.status(500).json({ message: 'OLLAMA_API_KEY is not configured on the server.' });
    return;
  }

  const body = req.body ?? {};
  const messages = getCleanMessages(body.messages);

  if (messages.length === 0) {
    res.status(400).json({ message: 'At least one message is required.' });
    return;
  }

  try {
    const upstreamResponse = await fetch(OLLAMA_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.OLLAMA_MODEL || DEFAULT_MODEL,
        stream: false,
        messages: [
          {
            role: 'system',
            content: process.env.OLLAMA_SYSTEM_PROMPT || DEFAULT_SYSTEM_PROMPT,
          },
          ...messages,
        ],
      }),
    });

    const rawText = await upstreamResponse.text();
    let payload: Record<string, unknown> | null = null;

    if (rawText) {
      try {
        payload = JSON.parse(rawText) as Record<string, unknown>;
      } catch {
        payload = { message: rawText };
      }
    }

    if (!upstreamResponse.ok) {
      const message =
        typeof payload?.error === 'string'
          ? payload.error
          : typeof payload?.message === 'string'
            ? payload.message
            : 'The model request failed.';

      res.status(upstreamResponse.status).json({ message });
      return;
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

    res.status(200).json({
      output: content,
      sessionId: body.sessionId ?? null,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'The server could not reach Ollama.';
    res.status(500).json({ message });
  }
}
