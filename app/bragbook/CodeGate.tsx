"use client";

import { useEffect, useRef, useState } from "react";
import { Lock } from "lucide-react";
import RequestAccess from "./RequestAccess";

export default function CodeGate() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const triedUrlCode = useRef(false);

  async function attempt(value: string) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/bragbook/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: value.trim() }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Invalid code.");
        setLoading(false);
        return;
      }
      const url = new URL(window.location.href);
      url.searchParams.delete("code");
      window.history.replaceState({}, "", url.toString());
      window.location.reload();
    } catch {
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  }

  useEffect(() => {
    if (triedUrlCode.current) return;
    triedUrlCode.current = true;
    const params = new URLSearchParams(window.location.search);
    const urlCode = params.get("code");
    if (urlCode) {
      setCode(urlCode);
      attempt(urlCode);
    }
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    attempt(code);
  }

  return (
    <section className="px-6 md:px-10 pt-48 pb-24 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-16 h-16 rounded-full border border-acid/40 flex items-center justify-center mb-6">
            <Lock className="w-6 h-6 text-acid" aria-hidden="true" />
          </div>
          <h1 className="font-display font-extrabold text-display-md text-paper leading-none mb-4">
            Bragbook
          </h1>
          <p className="font-body text-sm text-smoke max-w-xs">
            Private case studies, recommendations, and impact summaries.
            Enter the access code you received.
          </p>
        </div>

        <form onSubmit={submit} className="flex flex-col gap-4">
          <label htmlFor="bragbook-code" className="sr-only">
            Access code
          </label>
          <input
            id="bragbook-code"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Access code"
            autoComplete="off"
            spellCheck={false}
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
            disabled={loading || !code.trim()}
            className="font-mono text-xs tracking-widest uppercase border border-acid bg-acid text-ink px-4 py-3 hover:bg-transparent hover:text-acid transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? "Checking…" : "Unlock"}
          </button>
        </form>

        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-paper/10" />
          <span className="font-mono text-xs text-smoke/50">or</span>
          <div className="flex-1 h-px bg-paper/10" />
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="font-mono text-xs text-smoke/60 text-center">
            Don&apos;t have a code?
          </p>
          <RequestAccess variant="button" />
        </div>
      </div>
    </section>
  );
}
