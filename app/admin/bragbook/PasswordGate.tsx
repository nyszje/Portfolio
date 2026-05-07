"use client";

import { useState } from "react";

export default function PasswordGate() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/bragbook/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError("Wrong password.");
        setLoading(false);
        return;
      }
      window.location.reload();
    } catch {
      setError("Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <section className="px-6 md:px-10 pt-48 pb-24 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-md w-full">
        <h1 className="font-display font-extrabold text-display-md text-paper text-center mb-8">
          Admin
        </h1>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
            disabled={loading}
            className="font-mono text-sm bg-transparent border border-paper/20 px-4 py-3 text-paper placeholder:text-smoke/50 focus:outline-none focus:border-acid transition-colors"
          />
          {error && (
            <p className="font-mono text-xs text-red-400" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            className="font-mono text-xs tracking-widest uppercase border border-acid bg-acid text-ink px-4 py-3 hover:bg-transparent hover:text-acid transition-colors disabled:opacity-40"
          >
            {loading ? "Checking…" : "Sign in"}
          </button>
        </form>
      </div>
    </section>
  );
}
