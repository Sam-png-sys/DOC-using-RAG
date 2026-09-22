export type DocumentStatus =
  | "uploading"
  | "processing"
  | "ocr_processing"
  | "analyzing"
  | "ready"
  | "failed";

export type DocumentCategory =
  | "Contracts"
  | "Invoices"
  | "Reports"
  | "Academic"
  | "Resumes"
  | "Other";

export interface DocumentItem {
  id: string;
  filename: string;
  fileType: "pdf" | "docx" | "txt" | "png" | "jpg" | "jpeg";
  sizeBytes: number;
  uploadedAt: string;
  status: DocumentStatus;
  category: DocumentCategory;
  pageCount?: number;
  source: "local" | "drive";
}

export interface SourceCitation {
  page: number;
  section?: string;
  chunkId?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: SourceCitation[];
  createdAt: string;
}

export interface DocumentAnalysis {
  documentType: string;
  title: string;
  summary: string;
  keyPoints: string[];
  importantDates: { label: string; date: string }[];
  peopleOrganizations: string[];
  financialInformation: { label: string; amount: string }[];
  actionItems: string[];
  deadlines: { label: string; date: string }[];
}

export interface DashboardStats {
  totalDocuments: number;
  documentsAnalyzed: number;
  storageUsedMB: number;
  storageLimitMB: number;
  aiQuestionsAsked: number;
}
