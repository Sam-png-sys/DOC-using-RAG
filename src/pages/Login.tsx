import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FileStack } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for authApi.login({ email, password })
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-muted p-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white">
            <FileStack className="h-5 w-5" />
          </div>
          <h1 className="mt-3 font-display text-xl font-bold text-ink">Welcome back</h1>
          <p className="mt-1 text-sm text-ink-soft">Log in to Apurva Doc</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-card">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink-soft">Email</label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink-soft">Password</label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Button type="submit" className="w-full">
            Log in
          </Button>
        </form>

        <p className="mt-5 text-center text-sm text-ink-soft">
          Don't have an account?{" "}
          <Link to="/register" className="font-medium text-sky-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
