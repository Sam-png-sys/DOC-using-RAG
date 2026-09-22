import React, { useCallback, useState } from "react";
import { UploadCloud, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function UploadDropzone({
  onFiles,
  onBrowseDrive,
}: {
  onFiles?: (files: FileList) => void;
  onBrowseDrive?: () => void;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      if (e.dataTransfer.files.length) onFiles?.(e.dataTransfer.files);
    },
    [onFiles]
  );

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-12 text-center transition-colors",
        isDragging ? "border-sky-500 bg-sky-50" : "border-line bg-white"
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
        <UploadCloud className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-ink">Drop your documents here</h3>
      <p className="mt-1 text-sm text-ink-soft">PDF, DOCX, TXT, PNG or JPG — up to 50MB each</p>

      <div className="mt-5 flex items-center gap-3">
        <Button size="sm" onClick={() => inputRef.current?.click()}>
          Upload from computer
        </Button>
        <Button size="sm" variant="secondary" onClick={onBrowseDrive}>
          <HardDrive className="h-4 w-4" />
          Import from Google Drive
        </Button>
      </div>

      <input
        ref={inputRef}
        type="file"
        multiple
        hidden
        accept=".pdf,.docx,.txt,.png,.jpg,.jpeg"
        onChange={(e) => e.target.files && onFiles?.(e.target.files)}
      />
    </div>
  );
}
