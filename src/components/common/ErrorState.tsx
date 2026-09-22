import React from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ErrorState({
  message = "Something went wrong. Please try again.",
  onRetry,
}: {
  message?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center px-6">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-coral-500/10 text-coral-500">
        <AlertTriangle className="h-6 w-6" />
      </div>
      <p className="text-sm text-ink-soft max-w-sm">{message}</p>
      {onRetry && (
        <Button className="mt-5" size="sm" variant="secondary" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}
