import React from "react";
import { Plus, Minus, Pencil } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export interface DiffItem {
  section: string;
  type: "added" | "removed" | "modified";
  before?: string;
  after?: string;
}

const iconFor = { added: Plus, removed: Minus, modified: Pencil } as const;
const toneFor = { added: "mint", removed: "coral", modified: "amber" } as const;

export function CompareViewer({
  docAName,
  docBName,
  diffs,
}: {
  docAName: string;
  docBName: string;
  diffs: DiffItem[];
}) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="rounded-xl border border-line bg-white py-2 text-sm font-medium text-ink-soft">
          {docAName}
        </div>
        <div className="rounded-xl border border-line bg-white py-2 text-sm font-medium text-ink-soft">
          {docBName}
        </div>
      </div>

      {diffs.map((d, i) => {
        const Icon = iconFor[d.type];
        return (
          <Card key={i} className="p-4">
            <div className="mb-3 flex items-center gap-2">
              <Badge tone={toneFor[d.type] as any}>
                <Icon className="h-3 w-3" />
                {d.type}
              </Badge>
              <span className="text-sm font-medium text-ink">{d.section}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div
                className={
                  d.type === "added"
                    ? "rounded-lg bg-surface-sunken px-3 py-2 text-ink-faint italic"
                    : "rounded-lg bg-coral-500/5 px-3 py-2 text-ink"
                }
              >
                {d.before ?? "—"}
              </div>
              <div
                className={
                  d.type === "removed"
                    ? "rounded-lg bg-surface-sunken px-3 py-2 text-ink-faint italic"
                    : "rounded-lg bg-mint-500/5 px-3 py-2 text-ink"
                }
              >
                {d.after ?? "—"}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
