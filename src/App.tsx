import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import Dashboard from "@/pages/Dashboard";
import Documents from "@/pages/Documents";
import DocumentViewer from "@/pages/DocumentViewer";
import Drive from "@/pages/Drive";
import ChatPage from "@/pages/ChatPage";
import Compare from "@/pages/Compare";
import Settings from "@/pages/Settings";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<AppLayout title="Dashboard" />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
      <Route element={<AppLayout title="Documents" />}>
        <Route path="/documents" element={<Documents />} />
      </Route>
      {/* Document viewer manages its own header, so it skips the shared Topbar title */}
      <Route element={<AppLayout />}>
        <Route path="/documents/:id" element={<DocumentViewer />} />
        <Route path="/chat" element={<ChatPage />} />
      </Route>
      <Route element={<AppLayout title="Google Drive" />}>
        <Route path="/drive" element={<Drive />} />
      </Route>
      <Route element={<AppLayout title="Compare" />}>
        <Route path="/compare" element={<Compare />} />
      </Route>
      <Route element={<AppLayout title="Settings" />}>
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
