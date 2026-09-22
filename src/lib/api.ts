import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

// Attach JWT token from local storage to every request.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("apurva_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Central error handling — redirect to login on 401.
api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("apurva_token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// ---- Auth ----
export const authApi = {
  register: (data: { name: string; email: string; password: string }) =>
    api.post("/api/auth/register", data),
  login: (data: { email: string; password: string }) =>
    api.post("/api/auth/login", data),
  me: () => api.get("/api/auth/me"),
};

// ---- Documents ----
export const documentsApi = {
  upload: (formData: FormData, onProgress?: (pct: number) => void) =>
    api.post("/api/documents/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: (e) => {
        if (onProgress && e.total) onProgress(Math.round((e.loaded / e.total) * 100));
      },
    }),
  list: () => api.get("/api/documents"),
  get: (id: string) => api.get(`/api/documents/${id}`),
  remove: (id: string) => api.delete(`/api/documents/${id}`),
  status: (id: string) => api.get(`/api/documents/${id}/status`),
  analyze: (id: string) => api.post(`/api/documents/${id}/analyze`),
  analysis: (id: string) => api.get(`/api/documents/${id}/analysis`),
  chat: (id: string, message: string) =>
    api.post(`/api/documents/${id}/chat`, { message }),
  chatHistory: (id: string) => api.get(`/api/documents/${id}/chat/history`),
  compare: (docIdA: string, docIdB: string) =>
    api.post("/api/documents/compare", { docIdA, docIdB }),
  sources: (id: string) => api.get(`/api/documents/${id}/sources`),
};

// ---- Google Drive ----
export const driveApi = {
  connect: () => api.get("/api/drive/connect"),
  files: () => api.get("/api/drive/files"),
  import: (fileId: string) => api.post("/api/drive/import", { fileId }),
};
