import { FormEvent, KeyboardEvent, useEffect, useId, useMemo, useRef, useState } from 'react';
import { Loader2, MessageSquareText, Send, Sparkles, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ChatRole = 'assistant' | 'user';

type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
};

const SESSION_STORAGE_KEY = 'hello-co-chat-session-id';
const OPEN_STORAGE_KEY = 'hello-co-chat-open';
const INPUT_ID = 'support-chat-input';

function createId(prefix: string) {
  return `${prefix}-${crypto.randomUUID()}`;
}

function getStoredSessionId() {
  const existing = window.localStorage.getItem(SESSION_STORAGE_KEY);
  if (existing) return existing;

  const next = createId('session');
  window.localStorage.setItem(SESSION_STORAGE_KEY, next);
  return next;
}

export function SupportChat() {
  const labelId = useId();
  const descriptionId = useId();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: createId('assistant'),
      role: 'assistant',
      text: 'Hi. How can we help with your website, app, automation, or marketing?',
    },
  ]);

  const endpointUrl = useMemo(() => '/api/chat', []);

  useEffect(() => {
    const storedOpen = window.localStorage.getItem(OPEN_STORAGE_KEY);
    if (storedOpen === 'true') {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(OPEN_STORAGE_KEY, String(isOpen));
  }, [isOpen]);

  useEffect(() => {
    const viewport = scrollRef.current;
    if (!viewport) return;

    viewport.scrollTo({
      top: viewport.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, isOpen]);

  async function sendMessage(messageText: string) {
    const trimmed = messageText.trim();
    if (!trimmed || isSending) return;

    const userMessage: ChatMessage = {
      id: createId('user'),
      role: 'user',
      text: trimmed,
    };

    setMessages((current) => [...current, userMessage]);
    setInput('');
    setIsSending(true);

    try {
      const response = await fetch(endpointUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: getStoredSessionId(),
          messages: [...messages, userMessage].map((message) => ({
            role: message.role,
            content: message.text,
          })),
        }),
      });

      const rawText = await response.text();
      let payload: Record<string, unknown> | null = null;

      if (rawText) {
        try {
          payload = JSON.parse(rawText) as Record<string, unknown>;
        } catch {
          payload = { output: rawText };
        }
      }

      if (!response.ok) {
        const errorMessage =
          typeof payload?.error === 'string'
            ? payload.error
            : typeof payload?.message === 'string'
            ? payload.message
            : typeof payload?.output === 'string'
              ? payload.output
              : 'The assistant could not respond right now.';

        throw new Error(errorMessage);
      }

      const nextSessionId = typeof payload?.sessionId === 'string' ? payload.sessionId : null;
      if (nextSessionId) {
        window.localStorage.setItem(SESSION_STORAGE_KEY, nextSessionId);
      }

      const assistantReply =
        typeof payload?.output === 'string'
          ? payload.output
          : typeof payload?.error === 'string'
            ? payload.error
          : typeof payload?.message === 'string'
            ? payload.message
            : typeof payload?.text === 'string'
              ? payload.text
              : typeof payload?.content === 'string'
                ? payload.content
              : '';

      setMessages((current) => [
        ...current,
        {
          id: createId('assistant'),
          role: 'assistant',
          text: assistantReply || 'No reply came back from the assistant. Please try again.',
        },
      ]);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong while sending your message.';
      setMessages((current) => [
        ...current,
        {
          id: createId('assistant'),
          role: 'assistant',
          text: message,
        },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(input);
    }
  }

  return (
    <div className="support-chat fixed bottom-4 right-4 z-[70] sm:bottom-6 sm:right-6">
      {isOpen ? (
        <section
          aria-describedby={descriptionId}
          aria-labelledby={labelId}
          className="flex h-[min(42rem,calc(100vh-1rem))] w-[calc(100vw-1.5rem)] max-w-[24rem] flex-col overflow-hidden rounded-[28px] border border-white/60 bg-white/95 text-slate-950 shadow-[0_30px_80px_-30px_rgba(37,99,235,0.55)] backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/95 dark:text-slate-50 sm:h-[min(43rem,calc(100vh-3rem))]"
          role="dialog"
        >
          <div className="relative overflow-hidden border-b border-white/20 bg-[linear-gradient(135deg,#1d4ed8,#3b82f6)] px-5 py-4 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_40%)]" />
            <div className="relative flex items-start justify-between gap-4">
              <div className="space-y-1">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
                  <Sparkles className="h-3.5 w-3.5" />
                  Hello Co-Operations
                </p>
                <h2 id={labelId} className="font-display text-lg font-bold">
                  Ask Our Assistant
                </h2>
                <p id={descriptionId} className="max-w-xs text-sm text-blue-50/90">
                  Fast answers about our services, pricing, and project fit.
                </p>
              </div>
              <Button
                aria-label="Close chat"
                className="h-9 w-9 rounded-full border border-white/20 bg-white/10 p-0 text-white hover:bg-white/20"
                onClick={() => setIsOpen(false)}
                size="icon"
                variant="ghost"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div
            className="min-h-0 flex-1 space-y-4 overflow-x-hidden overflow-y-auto bg-[linear-gradient(180deg,rgba(239,246,255,0.8),rgba(255,255,255,0.95))] px-4 py-4 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98))]"
            ref={scrollRef}
          >
            {messages.map((message) => (
              <div
                className={cn('flex', message.role === 'user' ? 'justify-end' : 'justify-start')}
                key={message.id}
              >
                <div
                  className={cn(
                    'max-w-[78%] whitespace-pre-wrap break-words rounded-2xl px-4 py-3 text-sm leading-7 shadow-sm',
                    message.role === 'user'
                      ? 'rounded-br-md bg-primary text-white'
                      : 'rounded-bl-md border border-slate-200/80 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100',
                  )}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isSending ? (
              <div className="flex justify-start">
                <div className="inline-flex items-center gap-2 rounded-2xl rounded-bl-md border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Thinking...
                </div>
              </div>
            ) : null}
          </div>

          <form className="shrink-0 border-t border-slate-200 bg-white/95 p-4 dark:border-slate-800 dark:bg-slate-950/95" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor={INPUT_ID}>
              Type your message
            </label>
            <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-2 shadow-inner transition focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/10 dark:border-slate-700 dark:bg-slate-900">
              <textarea
                className="h-16 max-h-28 w-full resize-none bg-transparent px-3 py-2 text-sm leading-6 text-slate-800 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
                id={INPUT_ID}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message here..."
                rows={3}
                value={input}
              />
              <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-2">
                <p className="text-xs text-slate-400 dark:text-slate-500">Press Enter to send</p>
                <Button
                  className="h-10 rounded-full px-4 shadow-[0_14px_30px_-18px_rgba(37,99,235,0.7)]"
                  disabled={isSending || !input.trim()}
                  type="submit"
                >
                  {isSending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  Send
                </Button>
              </div>
            </div>
          </form>
        </section>
      ) : null}

      <Button
        aria-controls={labelId}
        aria-expanded={isOpen}
        className={cn(
          'mt-4 h-16 rounded-full px-5 shadow-[0_18px_40px_-18px_rgba(37,99,235,0.75)]',
          'bg-[linear-gradient(135deg,#1d4ed8,#3b82f6)] text-white hover:brightness-110',
          isOpen ? 'sr-only' : 'inline-flex',
        )}
        onClick={() => setIsOpen(true)}
        size="lg"
      >
        <MessageSquareText className="h-5 w-5" />
        Chat With Us
      </Button>
    </div>
  );
}
