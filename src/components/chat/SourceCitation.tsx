import React from "react";
import { FileSearch } from "lucide-react";
import type { SourceCitation as SourceCitationType } from "@/types";

export function SourceCitation({
  source,
  onJump,
}: {
  source: SourceCitationType;
  onJump?: (page: number) => void;
}) {
  return (
    <button
      onClick={() => onJump?.(source.page)}
      className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface-muted px-2.5 py-1 text-xs font-medium text-sky-700 hover:bg-sky-50 hover:border-sky-200 transition-colors"
    >
      <FileSearch className="h-3 w-3" />
      Page {source.page}
      {source.section ? ` · ${source.section}` : ""}
    </button>
  );
}
