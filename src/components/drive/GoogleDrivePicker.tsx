import React, { useState } from "react";
import { FileText, FolderOpen, Search, HardDrive } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/common/EmptyState";

export interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  modifiedAt: string;
}

export function GoogleDrivePicker({
  connected,
  files,
  onConnect,
  onImport,
}: {
  connected: boolean;
  files: DriveFile[];
  onConnect: () => void;
  onImport: (fileIds: string[]) => void;
}) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  if (!connected) {
    return (
      <EmptyState
        icon={<HardDrive className="h-6 w-6" />}
        title="Connect your Google Drive"
        description="Browse and import documents from Drive directly into Apurva Doc for AI analysis."
        actionLabel="Connect Google Drive"
        onAction={onConnect}
      />
    );
  }

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="space-y-4">
      <div className="relative max-w-sm">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
        <Input placeholder="Search Drive files…" className="pl-9" />
      </div>

      {files.length === 0 ? (
        <EmptyState icon={<FolderOpen className="h-6 w-6" />} title="No files found in Drive" />
      ) : (
        <div className="divide-y divide-line rounded-2xl border border-line bg-white">
          {files.map((f) => (
            <label
              key={f.id}
              className="flex cursor-pointer items-center gap-3 px-4 py-3 hover:bg-surface-muted"
            >
              <input
                type="checkbox"
                className="accent-sky-600"
                checked={selected.has(f.id)}
                onChange={() => toggle(f.id)}
              />
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                <FileText className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{f.name}</p>
                <p className="text-xs text-ink-faint">Modified {f.modifiedAt}</p>
              </div>
            </label>
          ))}
        </div>
      )}

      <Button disabled={selected.size === 0} onClick={() => onImport(Array.from(selected))}>
        Import {selected.size > 0 ? `${selected.size} file${selected.size > 1 ? "s" : ""}` : ""}
      </Button>
    </div>
  );
}
