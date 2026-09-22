# Apurva Doc — Frontend

React + Vite + TypeScript frontend for **Apurva Doc**, an AI document
intelligence platform (upload/import → OCR/extract → chunk/embed → RAG chat,
summary, analysis, comparison).

## Stack
React 18 · TypeScript · Vite · Tailwind CSS · React Router · TanStack Query ·
Axios · lucide-react

## Getting started
```bash
npm install
cp .env.example .env      # set VITE_API_URL to your backend
npm run dev
```
Open http://localhost:5173

## Structure
```
src/
  components/
    layout/       Sidebar, Topbar, AppLayout
    documents/     DocumentCard, DocumentTable, UploadDropzone, DocumentIcon
    chat/          AIChat, MessageBubble, SourceCitation
    analysis/      SummaryCard, AnalysisPanel
    compare/       CompareViewer
    drive/         GoogleDrivePicker
    common/        EmptyState, LoadingState, ErrorState, ProcessingStatus
    ui/            Button, Card, Badge, Input, Avatar, ProgressBar
  pages/           Dashboard, Documents, DocumentViewer, Drive, ChatPage,
                   Compare, Settings, Login, Register
  lib/             api.ts (axios client + endpoint calls), mockData.ts, utils.ts
  types/           shared TypeScript interfaces
```

## Current state
This is a **Stage-1 frontend scaffold**: fully routed, typed, and styled, but
wired to `lib/mockData.ts` instead of the live backend. Every place that
should call the API is marked with a comment pointing at the exact endpoint
in `lib/api.ts` (e.g. `documentsApi.chat`, `driveApi.import`), so wiring up
the real backend is a matter of swapping the mock calls for the matching
`*Api.*` function and handling loading/error state with TanStack Query.

## Design tokens
Defined in `tailwind.config.js`:
- **Colors**: white background, `surface.muted` light-gray surfaces, `sky`
  scale as the primary accent, `ink` for text.
- **Type**: Plus Jakarta Sans (display/headings) + Inter (body).
- **Shape**: rounded-2xl cards, soft `shadow-card` / `shadow-pop`.

## Next steps
1. Build the FastAPI backend (see project root plan).
2. Replace `mockData` imports with TanStack Query hooks calling `lib/api.ts`.
3. Wire real auth (JWT storage is already handled in the axios interceptor).
4. Drop in PDF.js in `DocumentViewer.tsx` for real page rendering.
