import React from "react";
import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { ProcessingStatus } from "@/components/common/ProcessingStatus";
import { Badge } from "@/components/ui/Badge";
import { DocumentIcon } from "./DocumentIcon";
import { formatBytes, formatDate } from "@/lib/utils";
import type { DocumentItem } from "@/types";

export function DocumentTable({
  documents,
  onDelete,
}: {
  documents: DocumentItem[];
  onDelete?: (id: string) => void;
}) {
  const navigate = useNavigate();
  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-white">
      <table className="w-full min-w-[720px] text-sm">
        <thead>
          <tr className="border-b border-line text-left text-xs font-medium uppercase tracking-wide text-ink-faint">
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Size</th>
            <th className="px-4 py-3">Uploaded</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr
              key={doc.id}
              className="border-b border-line last:border-0 hover:bg-surface-muted cursor-pointer"
              onClick={() => navigate(`/documents/${doc.id}`)}
            >
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                    <DocumentIcon type={doc.fileType} className="h-4 w-4" />
                  </div>
                  <span className="font-medium text-ink truncate max-w-[280px]">{doc.filename}</span>
                </div>
              </td>
              <td className="px-4 py-3">
                <Badge tone="neutral">{doc.category}</Badge>
              </td>
              <td className="px-4 py-3 text-ink-soft">{formatBytes(doc.sizeBytes)}</td>
              <td className="px-4 py-3 text-ink-soft">{formatDate(doc.uploadedAt)}</td>
              <td className="px-4 py-3">
                <ProcessingStatus status={doc.status} />
              </td>
              <td className="px-4 py-3 text-right">
                <button
                  className="text-ink-faint hover:text-coral-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete?.(doc.id);
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
