import React from "react";
import { cn } from "@/lib/utils";

type Tone = "neutral" | "sky" | "amber" | "mint" | "coral";

const tones: Record<Tone, string> = {
  neutral: "bg-surface-sunken text-ink-soft",
  sky: "bg-sky-100 text-sky-700",
  amber: "bg-amber-500/10 text-amber-500",
  mint: "bg-mint-500/10 text-mint-500",
  coral: "bg-coral-500/10 text-coral-500",
};

export function Badge({
  tone = "neutral",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
