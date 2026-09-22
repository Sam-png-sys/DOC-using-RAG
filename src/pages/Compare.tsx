import React, { useState } from "react";
import { Columns } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CompareViewer, type DiffItem } from "@/components/compare/CompareViewer";
import { EmptyState } from "@/components/common/EmptyState";
import { mockDocuments } from "@/lib/mockData";

const mockDiffs: DiffItem[] = [
  { section: "Payment terms", type: "modified", before: "₹50,000 due monthly", after: "₹75,000 due monthly" },
  { section: "Termination clause", type: "modified", before: "30 days notice", after: "60 days notice" },
  { section: "Confidentiality addendum", type: "added", after: "New 3-year confidentiality clause added" },
  { section: "Force majeure", type: "removed", before: "Original force majeure clause" },
];

export default function Compare() {
  const [docA, setDocA] = useState(mockDocuments[0].id);
  const [docB, setDocB] = useState(mockDocuments[1].id);
  const [result, setResult] = useState<DiffItem[] | null>(null);

  const nameOf = (id: string) => mockDocuments.find((d) => d.id === id)?.filename ?? "";

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Compare documents</h1>
        <p className="mt-1 text-sm text-ink-soft">
          See what changed between two versions — added, removed, and modified content.
        </p>
      </div>

      <Card className="p-5">
        <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <select
            value={docA}
            onChange={(e) => setDocA(e.target.value)}
            className="h-10 rounded-lg border border-line bg-white px-3 text-sm"
          >
            {mockDocuments.map((d) => (
              <option key={d.id} value={d.id}>
                {d.filename}
              </option>
            ))}
          </select>
          <span className="text-center text-xs font-medium text-ink-faint">vs</span>
          <select
            value={docB}
            onChange={(e) => setDocB(e.target.value)}
            className="h-10 rounded-lg border border-line bg-white px-3 text-sm"
          >
            {mockDocuments.map((d) => (
              <option key={d.id} value={d.id}>
                {d.filename}
              </option>
            ))}
          </select>
        </div>
        <Button className="mt-4" onClick={() => setResult(mockDiffs)}>
          Compare
        </Button>
      </Card>

      {result === null ? (
        <EmptyState
          icon={<Columns className="h-6 w-6" />}
          title="Select two documents to compare"
          description="Results will show added, removed, and modified sections side by side."
        />
      ) : (
        <CompareViewer docAName={nameOf(docA)} docBName={nameOf(docB)} diffs={result} />
      )}
    </div>
  );
}
