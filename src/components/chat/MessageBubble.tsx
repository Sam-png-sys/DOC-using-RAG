import React from "react";
import { Copy, RotateCcw, Sparkles } from "lucide-react";
import { SourceCitation } from "./SourceCitation";
import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/types";

export function MessageBubble({
  message,
  onJumpToPage,
  onRegenerate,
}: {
  message: ChatMessage;
  onJumpToPage?: (page: number) => void;
  onRegenerate?: () => void;
}) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex gap-3", isUser && "flex-row-reverse")}>
      {!isUser && (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white">
          <Sparkles className="h-3.5 w-3.5" />
        </div>
      )}
      <div className={cn("max-w-[85%]", isUser && "flex flex-col items-end")}>
        <div
          className={cn(
            "rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
            isUser
              ? "bg-sky-600 text-white rounded-tr-sm"
              : "bg-white border border-line text-ink rounded-tl-sm"
          )}
        >
          {message.content}
        </div>

        {message.sources && message.sources.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {message.sources.map((s, i) => (
              <SourceCitation key={i} source={s} onJump={onJumpToPage} />
            ))}
          </div>
        )}

        {!isUser && (
          <div className="mt-1.5 flex items-center gap-3 text-ink-faint">
            <button className="hover:text-ink-soft" title="Copy answer">
              <Copy className="h-3.5 w-3.5" />
            </button>
            <button className="hover:text-ink-soft" title="Regenerate" onClick={onRegenerate}>
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
