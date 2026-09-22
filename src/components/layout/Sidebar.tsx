import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  FileText,
  HardDrive,
  MessagesSquare,
  Columns,
  Settings,
  FileStack,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Dashboard", icon: LayoutGrid, end: true },
  { to: "/documents", label: "Documents", icon: FileText },
  { to: "/drive", label: "Google Drive", icon: HardDrive },
  { to: "/chat", label: "AI Chat", icon: MessagesSquare },
  { to: "/compare", label: "Compare", icon: Columns },
];

export function Sidebar() {
  return (
    <aside className="hidden md:flex w-60 shrink-0 flex-col border-r border-line bg-white">
      <div className="flex items-center gap-2.5 px-5 h-16 border-b border-line">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600 text-white">
          <FileStack className="h-4.5 w-4.5" />
        </div>
        <span className="font-display font-bold text-[17px] tracking-tight text-ink">
          Apurva Doc
        </span>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {nav.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sky-50 text-sky-700"
                  : "text-ink-soft hover:bg-surface-muted hover:text-ink"
              )
            }
          >
            <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="px-3 pb-4">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              isActive
                ? "bg-sky-50 text-sky-700"
                : "text-ink-soft hover:bg-surface-muted hover:text-ink"
            )
          }
        >
          <Settings className="h-[18px] w-[18px]" />
          Settings
        </NavLink>
      </div>

      <div className="border-t border-line px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-white text-xs font-semibold">
            S
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-ink">Sam</p>
            <p className="truncate text-xs text-ink-faint">Free plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
