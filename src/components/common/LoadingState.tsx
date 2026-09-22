import React from "react";
import { Loader2 } from "lucide-react";

export function LoadingState({ label = "Loading…" }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-ink-soft">
      <Loader2 className="h-6 w-6 animate-spin text-sky-500" />
      <p className="mt-3 text-sm">{label}</p>
    </div>
  );
}

export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-surface-sunken ${className}`} />;
}
