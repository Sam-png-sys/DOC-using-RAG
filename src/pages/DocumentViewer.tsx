import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowLeft, Sparkles, MessageSquare, ListTree } from "lucide-react";
import { AIChat } from "@/components/chat/AIChat";
import { SummaryCard } from "@/components/analysis/SummaryCard";
import { AnalysisPanel } from "@/components/analysis/AnalysisPanel";
import { cn } from "@/lib/utils";
import { mockDocuments, mockChat, mockAnalysis } from "@/lib/mockData";
import type { ChatMessage } from "@/types";

type Tab = "chat" | "summary" | "analysis";

export default function DocumentViewer() {
  const { id } = useParams();
  const doc = mockDocuments.find((d) => d.id === id) ?? mockDocuments[0];
  const [tab, setTab] = useState<Tab>("chat");
  const [page, setPage] = useState(1);
  const [messages, setMessages] = useState<ChatMessage[]>(mockChat);
  const [thinking, setThinking] = useState(false);

  const send = (text: string) => {
    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      createdAt: new Date().toISOString(),
    };
    setMessages((m) => [...m, userMsg]);
    setThinking(true);
    // Placeholder for POST /api/documents/{id}/chat
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "I couldn't find enough information in this document to answer that. (Connect the backend RAG endpoint to get real answers.)",
          createdAt: new Date().toISOString(),
        },
      ]);
      setThinking(false);
    }, 900);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3 border-b border-line bg-white px-5 py-3">
        <Link to="/documents" className="text-ink-faint hover:text-ink-soft">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h1 className="truncate text-sm font-semibold text-ink">{doc.filename}</h1>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[1.4fr_1fr]">
        {/* Left: document preview */}
        <div className="flex min-h-0 flex-col border-r border-line bg-surface-sunken">
          <div className="flex flex-1 items-center justify-center overflow-auto p-8">
            <div className="flex aspect-[1/1.4] w-full max-w-lg flex-col items-center justify-center rounded-xl bg-white p-8 text-center shadow-card">
              <p className="text-xs font-medium uppercase tracking-wide text-ink-faint">
                Preview — page {page}
              </p>
              <p className="mt-4 text-sm text-ink-soft">
                Wire up PDF.js here to render the actual page from the uploaded file.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 border-t border-line bg-white py-2">
            <button
              className="rounded-lg p-1.5 text-ink-faint hover:bg-surface-muted disabled:opacity-30"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-xs text-ink-soft">
              Page {page} of {doc.pageCount ?? "—"}
            </span>
            <button
              className="rounded-lg p-1.5 text-ink-faint hover:bg-surface-muted disabled:opacity-30"
              disabled={page >= (doc.pageCount ?? 1)}
              onClick={() => setPage((p) => Math.min(doc.pageCount ?? p, p + 1))}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right: AI assistant */}
        <div className="flex min-h-0 flex-col bg-white">
          <div className="flex border-b border-line px-2">
            {[
              { key: "chat" as Tab, label: "Chat", icon: MessageSquare },
              { key: "summary" as Tab, label: "Summary", icon: Sparkles },
              { key: "analysis" as Tab, label: "Key info", icon: ListTree },
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={cn(
                  "flex items-center gap-1.5 border-b-2 px-3 py-2.5 text-sm font-medium transition-colors",
                  tab === key
                    ? "border-sky-600 text-sky-700"
                    : "border-transparent text-ink-faint hover:text-ink-soft"
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </button>
            ))}
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto">
            {tab === "chat" && (
              <AIChat
                messages={messages}
                onSend={send}
                onClear={() => setMessages([])}
                onJumpToPage={setPage}
                isThinking={thinking}
              />
            )}
            {tab === "summary" && (
              <div className="p-4">
                <SummaryCard analysis={mockAnalysis} />
              </div>
            )}
            {tab === "analysis" && (
              <div className="p-4">
                <AnalysisPanel analysis={mockAnalysis} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
