import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FileStack } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for authApi.register(form)
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-muted p-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white">
            <FileStack className="h-5 w-5" />
          </div>
          <h1 className="mt-3 font-display text-xl font-bold text-ink">Create your account</h1>
          <p className="mt-1 text-sm text-ink-soft">Start analyzing documents with AI</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-card">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink-soft">Full name</label>
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink-soft">Email</label>
            <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink-soft">Password</label>
            <Input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
          </div>
          <Button type="submit" className="w-full">
            Create account
          </Button>
        </form>

        <p className="mt-5 text-center text-sm text-ink-soft">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-sky-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
