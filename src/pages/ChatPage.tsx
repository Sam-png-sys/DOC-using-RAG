import React, { useState } from "react";
import { FileText } from "lucide-react";
import { AIChat } from "@/components/chat/AIChat";
import { mockDocuments } from "@/lib/mockData";
import type { ChatMessage } from "@/types";
import { cn } from "@/lib/utils";

export default function ChatPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set([mockDocuments[0].id]));
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [thinking, setThinking] = useState(false);

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const send = (text: string) => {
    setMessages((m) => [
      ...m,
      { id: crypto.randomUUID(), role: "user", content: text, createdAt: new Date().toISOString() },
    ]);
    setThinking(true);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: `Searching across ${selected.size} selected document${selected.size > 1 ? "s" : ""}… (connect the multi-document chat endpoint for real answers)`,
          createdAt: new Date().toISOString(),
        },
      ]);
      setThinking(false);
    }, 900);
  };

  return (
    <div className="grid h-full grid-cols-1 lg:grid-cols-[280px_1fr]">
      <div className="border-r border-line bg-white p-4">
        <h2 className="mb-3 text-sm font-semibold text-ink">Documents in scope</h2>
        <div className="space-y-1.5">
          {mockDocuments.map((d) => (
            <label
              key={d.id}
              className={cn(
                "flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm",
                selected.has(d.id) ? "bg-sky-50 text-sky-700" : "text-ink-soft hover:bg-surface-muted"
              )}
            >
              <input
                type="checkbox"
                className="accent-sky-600"
                checked={selected.has(d.id)}
                onChange={() => toggle(d.id)}
              />
              <FileText className="h-4 w-4 shrink-0" />
              <span className="truncate">{d.filename}</span>
            </label>
          ))}
        </div>
      </div>

      <AIChat messages={messages} onSend={send} onClear={() => setMessages([])} isThinking={thinking} />
    </div>
  );
}
