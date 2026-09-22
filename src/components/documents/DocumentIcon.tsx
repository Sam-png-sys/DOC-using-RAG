import React from "react";
import { FileText, FileImage, File } from "lucide-react";
import type { DocumentItem } from "@/types";

export function DocumentIcon({ type, className }: { type: DocumentItem["fileType"]; className?: string }) {
  if (type === "pdf" || type === "docx" || type === "txt") {
    return <FileText className={className} />;
  }
  if (type === "png" || type === "jpg" || type === "jpeg") {
    return <FileImage className={className} />;
  }
  return <File className={className} />;
}
