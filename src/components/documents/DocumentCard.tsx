import React from "react";
import { useNavigate } from "react-router-dom";
import { MoreVertical } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProcessingStatus } from "@/components/common/ProcessingStatus";
import { DocumentIcon } from "./DocumentIcon";
import { formatBytes, timeAgo } from "@/lib/utils";
import type { DocumentItem } from "@/types";

export function DocumentCard({ doc }: { doc: DocumentItem }) {
  const navigate = useNavigate();
  return (
    <Card
      className="p-4 cursor-pointer hover:shadow-pop hover:-translate-y-0.5 transition-all"
      onClick={() => navigate(`/documents/${doc.id}`)}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
          <DocumentIcon type={doc.fileType} className="h-5 w-5" />
        </div>
        <button
          className="text-ink-faint hover:text-ink-soft"
          onClick={(e) => e.stopPropagation()}
        >
          <MoreVertical className="h-4 w-4" />
        </button>
      </div>

      <h3 className="mt-3 truncate text-sm font-semibold text-ink" title={doc.filename}>
        {doc.filename}
      </h3>
      <p className="mt-0.5 text-xs text-ink-faint">
        {formatBytes(doc.sizeBytes)} · {doc.pageCount ? `${doc.pageCount} pages · ` : ""}
        {timeAgo(doc.uploadedAt)}
      </p>

      <div className="mt-3 flex items-center justify-between">
        <Badge tone="neutral">{doc.category}</Badge>
        <ProcessingStatus status={doc.status} />
      </div>
    </Card>
  );
}
