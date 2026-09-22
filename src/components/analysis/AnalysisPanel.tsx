import React from "react";
import { Calendar, Users, IndianRupee, ListChecks, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import type { DocumentAnalysis } from "@/types";

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2 pb-0">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
          {icon}
        </div>
        <h4 className="text-sm font-semibold text-ink">{title}</h4>
      </CardHeader>
      <CardContent className="pt-3">{children}</CardContent>
    </Card>
  );
}

export function AnalysisPanel({ analysis }: { analysis: DocumentAnalysis }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Section icon={<Calendar className="h-4 w-4" />} title="Important dates">
        <ul className="space-y-2">
          {analysis.importantDates.map((d, i) => (
            <li key={i} className="flex justify-between text-sm">
              <span className="text-ink-soft">{d.label}</span>
              <span className="font-medium text-ink">{d.date}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section icon={<Users className="h-4 w-4" />} title="People & organizations">
        <div className="flex flex-wrap gap-1.5">
          {analysis.peopleOrganizations.map((p, i) => (
            <span key={i} className="rounded-full bg-surface-sunken px-2.5 py-1 text-xs text-ink-soft">
              {p}
            </span>
          ))}
        </div>
      </Section>

      <Section icon={<IndianRupee className="h-4 w-4" />} title="Financial information">
        <ul className="space-y-2">
          {analysis.financialInformation.map((f, i) => (
            <li key={i} className="flex justify-between text-sm">
              <span className="text-ink-soft">{f.label}</span>
              <span className="font-medium text-ink">{f.amount}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section icon={<Clock className="h-4 w-4" />} title="Deadlines">
        <ul className="space-y-2">
          {analysis.deadlines.map((d, i) => (
            <li key={i} className="flex justify-between text-sm">
              <span className="text-ink-soft">{d.label}</span>
              <span className="font-medium text-coral-500">{d.date}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section icon={<ListChecks className="h-4 w-4" />} title="Action items">
        <ul className="space-y-2">
          {analysis.actionItems.map((a, i) => (
            <li key={i} className="flex gap-2 text-sm text-ink">
              <input type="checkbox" className="mt-0.5 accent-sky-600" />
              {a}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
