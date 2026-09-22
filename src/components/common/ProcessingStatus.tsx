import React from "react";
import { CheckCircle2, Loader2, ScanText, XCircle, UploadCloud, Sparkles } from "lucide-react";
import type { DocumentStatus } from "@/types";
import { Badge } from "@/components/ui/Badge";

const config: Record<
  DocumentStatus,
  { label: string; tone: "neutral" | "sky" | "amber" | "mint" | "coral"; icon: React.ReactNode }
> = {
  uploading: { label: "Uploading", tone: "neutral", icon: <UploadCloud className="h-3 w-3" /> },
  processing: { label: "Processing", tone: "sky", icon: <Loader2 className="h-3 w-3 animate-spin" /> },
  ocr_processing: { label: "Running OCR", tone: "amber", icon: <ScanText className="h-3 w-3" /> },
  analyzing: { label: "Analyzing", tone: "sky", icon: <Sparkles className="h-3 w-3" /> },
  ready: { label: "Ready", tone: "mint", icon: <CheckCircle2 className="h-3 w-3" /> },
  failed: { label: "Failed", tone: "coral", icon: <XCircle className="h-3 w-3" /> },
};

export function ProcessingStatus({ status }: { status: DocumentStatus }) {
  const c = config[status];
  return (
    <Badge tone={c.tone}>
      {c.icon}
      {c.label}
    </Badge>
  );
}
