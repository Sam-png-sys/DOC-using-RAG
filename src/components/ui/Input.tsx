import React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-10 w-full rounded-lg border border-line bg-white px-3 text-sm text-ink placeholder:text-ink-faint focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-colors",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
