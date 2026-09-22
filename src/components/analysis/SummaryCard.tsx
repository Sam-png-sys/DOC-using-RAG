import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import type { DocumentAnalysis } from "@/types";

export function SummaryCard({ analysis }: { analysis: DocumentAnalysis }) {
  return (
    <Card>
      <CardHeader>
        <p className="text-xs font-medium uppercase tracking-wide text-sky-600">
          {analysis.documentType}
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold text-ink">{analysis.title}</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed text-ink-soft">{analysis.summary}</p>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-faint">
            Key points
          </p>
          <ul className="space-y-1.5">
            {analysis.keyPoints.map((point, i) => (
              <li key={i} className="flex gap-2 text-sm text-ink">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky-500" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
