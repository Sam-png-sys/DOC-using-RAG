import React from "react";
import { cn } from "@/lib/utils";

export function Avatar({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-sky-600 text-white text-xs font-semibold h-9 w-9 shrink-0",
        className
      )}
    >
      {initials}
    </div>
  );
}
