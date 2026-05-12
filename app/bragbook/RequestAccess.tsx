"use client";

import { useEffect, useState } from "react";

export default function RequestAccess({
  variant = "button",
}: {
  variant?: "button" | "link";
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/bragbook/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, note }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Could not submit. Try again later.");
        setLoading(false);
        return;
      }
      setSent(true);
      setLoading(false);
    } catch {
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  }

  function close() {
    setOpen(false);
    if (sent) {
      setSent(false);
      setName("");
      setCompany("");
      setEmail("");
      setNote("");
    }
  }

  const trigger =
    variant === "link" ? (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-acid hover:underline"
      >
        Request access
      </button>
    ) : (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="font-mono text-xs tracking-widest uppercase border border-acid text-acid px-6 py-3 hover:bg-acid hover:text-ink transition-colors"
      >
        Request access
      </button>
    );

  return (
    <>
      {trigger}

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="request-access-title"
          className="fixed inset-0 z-[10001] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <div className="bg-ink border border-paper/20 max-w-md w-full p-8 relative">
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 font-mono text-sm text-smoke hover:text-acid"
            >
              ✕
            </button>

            {sent ? (
              <div className="text-center py-6">
                <h2
                  id="request-access-title"
                  className="font-display font-bold text-2xl text-paper mb-3"
                >
                  Request sent
                </h2>
                <p className="font-body text-sm text-smoke mb-6">
                  Thanks - I&apos;ll review and get back to you with an access
                  code shortly.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="font-mono text-xs tracking-widest uppercase border border-acid bg-acid text-ink px-6 py-2 hover:bg-transparent hover:text-acid transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h2
                  id="request-access-title"
                  className="font-display font-bold text-2xl text-paper mb-2"
                >
                  Request access
                </h2>
                <p className="font-body text-sm text-smoke mb-6">
                  I&apos;ll review your request and email you a personal code.
                </p>

                <form onSubmit={submit} className="flex flex-col gap-3">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    maxLength={100}
                    autoComplete="name"
                    disabled={loading}
                    className="font-mono text-sm bg-transparent border border-paper/20 px-3 py-2 text-paper placeholder:text-smoke/50 focus:outline-none focus:border-acid"
                  />
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company"
                    maxLength={100}
                    autoComplete="organization"
                    disabled={loading}
                    className="font-mono text-sm bg-transparent border border-paper/20 px-3 py-2 text-paper placeholder:text-smoke/50 focus:outline-none focus:border-acid"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Work email"
                    maxLength={200}
                    autoComplete="email"
                    disabled={loading}
                    className="font-mono text-sm bg-transparent border border-paper/20 px-3 py-2 text-paper placeholder:text-smoke/50 focus:outline-none focus:border-acid"
                  />
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Optional: role you're hiring for, anything else"
                    maxLength={1000}
                    rows={3}
                    disabled={loading}
                    className="font-mono text-sm bg-transparent border border-paper/20 px-3 py-2 text-paper placeholder:text-smoke/50 focus:outline-none focus:border-acid resize-none"
                  />
                  {error && (
                    <p
                      className="font-mono text-xs text-red-400"
                      role="alert"
                    >
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={
                      loading || !name.trim() || !company.trim() || !email.trim()
                    }
                    className="font-mono text-xs tracking-widest uppercase border border-acid bg-acid text-ink px-4 py-3 hover:bg-transparent hover:text-acid transition-colors disabled:opacity-40 disabled:cursor-not-allowed mt-2"
                  >
                    {loading ? "Sending…" : "Send request"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
