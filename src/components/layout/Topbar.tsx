import React from "react";
import { Search, Upload, HardDrive, Bell } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function Topbar({
  onUploadClick,
  title,
}: {
  onUploadClick?: () => void;
  title?: string;
}) {
  return (
    <header className="flex h-16 items-center gap-4 border-b border-line bg-white px-4 md:px-6">
      {title && (
        <h1 className="hidden md:block font-display text-lg font-semibold text-ink shrink-0">
          {title}
        </h1>
      )}

      <div className="relative flex-1 max-w-md ml-auto md:ml-0">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
        <Input placeholder="Search documents…" className="pl-9" />
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <Button variant="secondary" size="sm" className="hidden sm:inline-flex">
          <HardDrive className="h-4 w-4" />
          Drive
        </Button>
        <Button size="sm" onClick={onUploadClick}>
          <Upload className="h-4 w-4" />
          Upload
        </Button>
        <button className="relative flex h-9 w-9 items-center justify-center rounded-lg text-ink-soft hover:bg-surface-muted">
          <Bell className="h-[18px] w-[18px]" />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-coral-500" />
        </button>
      </div>
    </header>
  );
}
