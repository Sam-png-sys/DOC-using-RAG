import React, { useState } from "react";
import { GoogleDrivePicker, type DriveFile } from "@/components/drive/GoogleDrivePicker";

const mockDriveFiles: DriveFile[] = [
  { id: "d1", name: "Vendor_Contract_2026.pdf", mimeType: "pdf", modifiedAt: "2 days ago" },
  { id: "d2", name: "Annual_Report_Draft.docx", mimeType: "docx", modifiedAt: "5 days ago" },
  { id: "d3", name: "Client_Notes.txt", mimeType: "txt", modifiedAt: "1 week ago" },
];

export default function Drive() {
  const [connected, setConnected] = useState(false);

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Google Drive</h1>
        <p className="mt-1 text-sm text-ink-soft">
          Import documents directly from Drive into your processing pipeline.
        </p>
      </div>

      <GoogleDrivePicker
        connected={connected}
        files={mockDriveFiles}
        onConnect={() => setConnected(true)} // Placeholder for GET /api/drive/connect
        onImport={(ids) => alert(`Import requested for: ${ids.join(", ")}`)} // POST /api/drive/import
      />
    </div>
  );
}
