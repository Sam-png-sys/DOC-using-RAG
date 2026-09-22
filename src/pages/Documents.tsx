import React, { useState } from "react";
import { LayoutGrid, List as ListIcon } from "lucide-react";
import { DocumentCard } from "@/components/documents/DocumentCard";
import { DocumentTable } from "@/components/documents/DocumentTable";
import { UploadDropzone } from "@/components/documents/UploadDropzone";
import { EmptyState } from "@/components/common/EmptyState";
import { cn } from "@/lib/utils";
import { mockDocuments } from "@/lib/mockData";
import type { DocumentCategory } from "@/types";
import { FileText } from "lucide-react";

const categories: (DocumentCategory | "All")[] = [
  "All",
  "Contracts",
  "Invoices",
  "Reports",
  "Academic",
  "Resumes",
  "Other",
];

export default function Documents() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [docs] = useState(mockDocuments);

  const filtered = category === "All" ? docs : docs.filter((d) => d.category === category);

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-2xl font-bold text-ink">Documents</h1>
        <div className="flex items-center rounded-lg border border-line bg-white p-1">
          <button
            className={cn("rounded-md p-1.5", view === "grid" ? "bg-sky-50 text-sky-600" : "text-ink-faint")}
            onClick={() => setView("grid")}
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button
            className={cn("rounded-md p-1.5", view === "list" ? "bg-sky-50 text-sky-600" : "text-ink-faint")}
            onClick={() => setView("list")}
          >
            <ListIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      <UploadDropzone />

      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium border transition-colors",
              category === c
                ? "border-sky-500 bg-sky-50 text-sky-700"
                : "border-line bg-white text-ink-soft hover:border-sky-200"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={<FileText className="h-6 w-6" />}
          title="No documents in this category yet"
          description="Upload a document or import one from Google Drive to get started."
        />
      ) : view === "grid" ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((doc) => (
            <DocumentCard key={doc.id} doc={doc} />
          ))}
        </div>
      ) : (
        <DocumentTable documents={filtered} />
      )}
    </div>
  );
}
