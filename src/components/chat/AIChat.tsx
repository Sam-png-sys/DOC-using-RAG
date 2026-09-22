import React, { useState } from "react";
import { Send, Sparkles, Trash2 } from "lucide-react";
import { MessageBubble } from "./MessageBubble";
import { Button } from "@/components/ui/Button";
import type { ChatMessage } from "@/types";

const SUGGESTED = [
  "Summarize this document",
  "What is the payment deadline?",
  "Who are the parties involved?",
];

export function AIChat({
  messages,
  onSend,
  onClear,
  onJumpToPage,
  isThinking,
}: {
  messages: ChatMessage[];
  onSend: (text: string) => void;
  onClear?: () => void;
  onJumpToPage?: (page: number) => void;
  isThinking?: boolean;
}) {
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    onSend(input.trim());
    setInput("");
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <p className="text-sm font-semibold text-ink">Ask anything about this document</p>
        <button className="text-ink-faint hover:text-coral-500" onClick={onClear} title="Clear conversation">
          <Trash2 className="h-4 w-4" />
        </button>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
              <Sparkles className="h-5 w-5" />
            </div>
            <p className="mt-3 text-sm text-ink-soft max-w-[220px]">
              Ask a question and I'll answer using this document, with page citations.
            </p>
          </div>
        )}

        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} onJumpToPage={onJumpToPage} />
        ))}

        {isThinking && (
          <div className="flex gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white">
              <Sparkles className="h-3.5 w-3.5" />
            </div>
            <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm border border-line bg-white px-4 py-3">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-ink-faint animate-bounce"
                  style={{ animationDelay: `${i * 0.12}s` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {messages.length === 0 && (
        <div className="flex flex-wrap gap-2 px-4 pb-3">
          {SUGGESTED.map((q) => (
            <button
              key={q}
              onClick={() => onSend(q)}
              className="rounded-full border border-line bg-white px-3 py-1.5 text-xs text-ink-soft hover:border-sky-300 hover:text-sky-700 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center gap-2 border-t border-line p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask anything…"
          className="h-10 flex-1 rounded-lg border border-line bg-white px-3 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
        <Button size="sm" onClick={send} disabled={!input.trim()}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
