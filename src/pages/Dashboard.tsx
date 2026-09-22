import React from "react";
import { FileText, Sparkles, HardDrive as HardDriveIcon, MessagesSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { UploadDropzone } from "@/components/documents/UploadDropzone";
import { DocumentCard } from "@/components/documents/DocumentCard";
import { mockStats, mockDocuments } from "@/lib/mockData";

const statCards = [
  { label: "Total documents", value: mockStats.totalDocuments, icon: FileText, tone: "sky" },
  { label: "Documents analyzed", value: mockStats.documentsAnalyzed, icon: Sparkles, tone: "mint" },
  { label: "AI questions asked", value: mockStats.aiQuestionsAsked, icon: MessagesSquare, tone: "amber" },
] as const;

export default function Dashboard() {
  const recent = mockDocuments.slice(0, 4);
  const storagePct = (mockStats.storageUsedMB / mockStats.storageLimitMB) * 100;

  return (
    <div className="mx-auto max-w-6xl space-y-8 p-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Good to see you, Sam</h1>
        <p className="mt-1 text-sm text-ink-soft">Here's what's happening with your documents.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map(({ label, value, icon: Icon, tone }) => (
          <Card key={label} className="p-5">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                tone === "sky" ? "bg-sky-50 text-sky-600" : tone === "mint" ? "bg-mint-500/10 text-mint-500" : "bg-amber-500/10 text-amber-500"
              }`}
            >
              <Icon className="h-4.5 w-4.5" />
            </div>
            <p className="mt-3 text-2xl font-semibold text-ink">{value}</p>
            <p className="text-xs text-ink-faint">{label}</p>
          </Card>
        ))}

        <Card className="p-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-sunken text-ink-soft">
            <HardDriveIcon className="h-4.5 w-4.5" />
          </div>
          <p className="mt-3 text-2xl font-semibold text-ink">
            {mockStats.storageUsedMB}
            <span className="text-sm font-normal text-ink-faint"> / {mockStats.storageLimitMB} MB</span>
          </p>
          <ProgressBar value={storagePct} className="mt-2" />
        </Card>
      </div>

      <UploadDropzone />

      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-display text-base font-semibold text-ink">Recent documents</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {recent.map((doc) => (
            <DocumentCard key={doc.id} doc={doc} />
          ))}
        </div>
      </div>
    </div>
  );
}
