// Temporary in-memory data so the UI is browsable before the backend
// (Stage 1+) is wired up. Swap these out for real `documentsApi` calls.
import type { DocumentItem, DashboardStats, ChatMessage, DocumentAnalysis } from "@/types";

export const mockStats: DashboardStats = {
  totalDocuments: 18,
  documentsAnalyzed: 14,
  storageUsedMB: 340,
  storageLimitMB: 2048,
  aiQuestionsAsked: 63,
};

export const mockDocuments: DocumentItem[] = [
  {
    id: "doc_1",
    filename: "Service_Agreement_Nexora.pdf",
    fileType: "pdf",
    sizeBytes: 842_000,
    uploadedAt: "2026-09-18T09:20:00Z",
    status: "ready",
    category: "Contracts",
    pageCount: 24,
    source: "local",
  },
  {
    id: "doc_2",
    filename: "Q2_Financial_Report.pdf",
    fileType: "pdf",
    sizeBytes: 1_240_000,
    uploadedAt: "2026-09-17T14:05:00Z",
    status: "ready",
    category: "Reports",
    pageCount: 41,
    source: "drive",
  },
  {
    id: "doc_3",
    filename: "Invoice_INV-2291.pdf",
    fileType: "pdf",
    sizeBytes: 210_000,
    uploadedAt: "2026-09-21T08:40:00Z",
    status: "analyzing",
    category: "Invoices",
    pageCount: 2,
    source: "local",
  },
  {
    id: "doc_4",
    filename: "Scanned_Lease_Copy.png",
    fileType: "png",
    sizeBytes: 3_100_000,
    uploadedAt: "2026-09-21T11:02:00Z",
    status: "ocr_processing",
    category: "Contracts",
    source: "local",
  },
  {
    id: "doc_5",
    filename: "Thesis_Chapter3_Draft.docx",
    fileType: "docx",
    sizeBytes: 512_000,
    uploadedAt: "2026-09-15T18:30:00Z",
    status: "ready",
    category: "Academic",
    pageCount: 18,
    source: "local",
  },
  {
    id: "doc_6",
    filename: "Resume_SamJoshi.pdf",
    fileType: "pdf",
    sizeBytes: 98_000,
    uploadedAt: "2026-09-10T07:15:00Z",
    status: "failed",
    category: "Resumes",
    source: "local",
  },
];

export const mockChat: ChatMessage[] = [
  {
    id: "m1",
    role: "user",
    content: "What is the payment deadline?",
    createdAt: "2026-09-21T10:00:00Z",
  },
  {
    id: "m2",
    role: "assistant",
    content:
      "According to Section 4.2, payment must be completed within 30 days of receiving the invoice. Late payments incur a 2% monthly penalty.",
    sources: [
      { page: 7, section: "4.2 Payment Terms" },
      { page: 8, section: "4.3 Late Payment" },
    ],
    createdAt: "2026-09-21T10:00:04Z",
  },
];

export const mockAnalysis: DocumentAnalysis = {
  documentType: "Contract",
  title: "Service Agreement — Nexora Pvt. Ltd.",
  summary:
    "A 12-month service agreement between Nexora Pvt. Ltd. and the client covering scope of work, payment terms, confidentiality, and termination conditions.",
  keyPoints: [
    "12-month term starting 1 Oct 2026",
    "Total contract value of ₹4,50,000, billed quarterly",
    "30-day payment window from invoice date",
    "60-day written notice required for termination",
  ],
  importantDates: [
    { label: "Contract start", date: "1 Oct 2026" },
    { label: "First payment due", date: "31 Oct 2026" },
  ],
  peopleOrganizations: ["Nexora Pvt. Ltd.", "Client Services LLP", "R. Mehta (signatory)"],
  financialInformation: [
    { label: "Total contract value", amount: "₹4,50,000" },
    { label: "Late payment penalty", amount: "2% / month" },
  ],
  actionItems: ["Countersign by 28 Sept", "Share billing POC details"],
  deadlines: [{ label: "Signature deadline", date: "28 Sep 2026" }],
};
