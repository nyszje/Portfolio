"use client";

import { useEffect, useState } from "react";

type AccessLog = { ts: number; ip: string; ua: string };
type Code = {
  code: string;
  employer: string;
  createdAt: number;
  active: boolean;
  logs: AccessLog[];
};

type AccessRequest = {
  id: string;
  ts: number;
  name: string;
  company: string;
  email: string;
  note?: string;
  ip: string;
  ua: string;
  referer?: string;
  status: "pending" | "fulfilled" | "declined";
  fulfilledCode?: string;
};

function fmt(ts: number) {
  return new Date(ts).toLocaleString("pl-PL", {
    dateStyle: "short",
    timeStyle: "short",
  });
}

export default function AdminPanel({ unconfigured }: { unconfigured: boolean }) {
  const [codes, setCodes] = useState<Code[]>([]);
  const [requests, setRequests] = useState<AccessRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [employer, setEmployer] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openLogs, setOpenLogs] = useState<string | null>(null);
  const [openNote, setOpenNote] = useState<string | null>(null);
  const [showHandled, setShowHandled] = useState(false);

  async function load() {
    setLoading(true);
    const [codesRes, reqRes] = await Promise.all([
      fetch("/api/admin/bragbook/codes"),
      fetch("/api/admin/bragbook/requests"),
    ]);
    if (codesRes.ok) setCodes((await codesRes.json()).codes || []);
    if (reqRes.ok) setRequests((await reqRes.json()).requests || []);
    setLoading(false);
  }

  useEffect(() => {
    if (!unconfigured) load();
    else setLoading(false);
  }, [unconfigured]);

  async function fulfillRequest(r: AccessRequest) {
    const employerInput = prompt(
      "Employer name for the code:",
      r.company,
    );
    if (!employerInput?.trim()) return;
    const customInput = prompt(
      "Custom code (leave empty to auto-generate):",
      "",
    );
    const res = await fetch(
      `/api/admin/bragbook/requests/${encodeURIComponent(r.id)}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "fulfill",
          employer: employerInput.trim(),
          code: customInput?.trim() || undefined,
        }),
      },
    );
    if (res.ok) {
      const data = await res.json();
      await load();
      const link = `${window.location.origin}/bragbook?code=${encodeURIComponent(data.code.code)}`;
      await navigator.clipboard.writeText(link);
      alert(
        `Code "${data.code.code}" created and request marked fulfilled.\nInvite link copied to clipboard:\n${link}`,
      );
    } else {
      const data = await res.json().catch(() => ({}));
      alert(`Failed: ${data.error || "Unknown error"}`);
    }
  }

  async function declineRequest(id: string) {
    if (!confirm("Mark this request as declined?")) return;
    await fetch(`/api/admin/bragbook/requests/${encodeURIComponent(id)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "decline" }),
    });
    await load();
  }

  async function removeRequest(id: string) {
    if (!confirm("Delete this request from history?")) return;
    await fetch(`/api/admin/bragbook/requests/${encodeURIComponent(id)}`, {
      method: "DELETE",
    });
    await load();
  }

  async function create(e: React.FormEvent) {
    e.preventDefault();
    setCreating(true);
    setError(null);
    const res = await fetch("/api/admin/bragbook/codes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        employer: employer.trim(),
        code: customCode.trim() || undefined,
      }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Failed to create code.");
    } else {
      setEmployer("");
      setCustomCode("");
      await load();
    }
    setCreating(false);
  }

  async function setActive(code: string, action: "revoke" | "activate") {
    await fetch(`/api/admin/bragbook/codes/${encodeURIComponent(code)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action }),
    });
    await load();
  }

  async function remove(code: string) {
    if (!confirm(`Delete code "${code}" and all its logs? Cannot be undone.`))
      return;
    await fetch(`/api/admin/bragbook/codes/${encodeURIComponent(code)}`, {
      method: "DELETE",
    });
    await load();
  }

  async function copyLink(code: string) {
    const url = `${window.location.origin}/bragbook?code=${encodeURIComponent(code)}`;
    await navigator.clipboard.writeText(url);
    alert("Link copied!");
  }

  async function signOut() {
    await fetch("/api/admin/bragbook/auth", { method: "DELETE" });
    window.location.reload();
  }

  if (unconfigured) {
    return (
      <section className="px-6 md:px-10 pt-32 pb-24 max-w-3xl mx-auto">
        <h1 className="font-display font-extrabold text-display-md text-paper mb-6">
          Admin - Bragbook
        </h1>
        <div className="border border-acid/40 p-6">
          <p className="font-body text-sm text-paper mb-4">
            <strong>Upstash Redis is not configured yet.</strong>
          </p>
          <ol className="font-body text-sm text-smoke list-decimal pl-5 space-y-2">
            <li>
              Go to{" "}
              <a
                href="https://console.upstash.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-acid hover:underline"
              >
                console.upstash.com
              </a>{" "}
              and create a free Redis database.
            </li>
            <li>
              Copy <code>UPSTASH_REDIS_REST_URL</code> and{" "}
              <code>UPSTASH_REDIS_REST_TOKEN</code>.
            </li>
            <li>
              Paste them into <code>.env.local</code> (locally) and into Vercel
              project Environment Variables (production).
            </li>
            <li>Redeploy. Reload this page.</li>
          </ol>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 md:px-10 pt-32 pb-24 max-w-5xl mx-auto">
      <header className="flex items-center justify-between mb-10">
        <h1 className="font-display font-extrabold text-display-md text-paper">
          Bragbook codes
        </h1>
        <button
          onClick={signOut}
          className="font-mono text-xs tracking-widest uppercase text-smoke hover:text-acid transition-colors"
        >
          Sign out
        </button>
      </header>

      {/* Requests section */}
      <section className="mb-12">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="font-display font-bold text-lg text-paper">
            Access requests{" "}
            <span className="font-mono text-xs text-smoke">
              ({requests.filter((r) => r.status === "pending").length} pending)
            </span>
          </h2>
          {requests.some((r) => r.status !== "pending") && (
            <button
              onClick={() => setShowHandled((v) => !v)}
              className="font-mono text-xs text-smoke hover:text-acid"
            >
              {showHandled ? "Hide" : "Show"} handled
            </button>
          )}
        </div>

        {requests.length === 0 ? (
          <p className="font-mono text-xs text-smoke">No requests yet.</p>
        ) : (
          <div className="space-y-2">
            {requests
              .filter((r) => showHandled || r.status === "pending")
              .map((r) => (
                <div
                  key={r.id}
                  className="border border-paper/10 p-4 grid grid-cols-1 md:grid-cols-[2fr_2fr_1.5fr_auto] gap-3 items-start"
                >
                  <div>
                    <p className="font-mono text-sm text-paper">{r.name}</p>
                    <p className="font-mono text-xs text-smoke">{r.company}</p>
                    <a
                      href={`mailto:${r.email}`}
                      className="font-mono text-xs text-acid hover:underline break-all"
                    >
                      {r.email}
                    </a>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-paper">
                      {fmt(r.ts)}
                    </p>
                    <p className="font-mono text-xs text-smoke">IP: {r.ip}</p>
                    {r.referer && (
                      <p
                        className="font-mono text-xs text-smoke/60 truncate max-w-xs"
                        title={r.referer}
                      >
                        ref: {r.referer}
                      </p>
                    )}
                    {r.note && (
                      <button
                        onClick={() =>
                          setOpenNote(openNote === r.id ? null : r.id)
                        }
                        className="font-mono text-xs text-acid hover:underline mt-1"
                      >
                        {openNote === r.id ? "hide note" : "show note"}
                      </button>
                    )}
                  </div>
                  <div>
                    <span
                      className={`font-mono text-xs px-2 py-0.5 border inline-block ${
                        r.status === "pending"
                          ? "border-acid/40 text-acid"
                          : r.status === "fulfilled"
                          ? "border-green-400/40 text-green-400"
                          : "border-smoke/40 text-smoke"
                      }`}
                    >
                      {r.status}
                    </span>
                    {r.fulfilledCode && (
                      <p className="font-mono text-xs text-smoke mt-1 break-all">
                        → {r.fulfilledCode}
                      </p>
                    )}
                  </div>
                  <div className="flex md:flex-col gap-2 items-start md:items-end">
                    {r.status === "pending" && (
                      <>
                        <button
                          onClick={() => fulfillRequest(r)}
                          className="font-mono text-xs tracking-wider uppercase border border-acid bg-acid text-ink px-2 py-1 hover:bg-transparent hover:text-acid transition-colors"
                        >
                          Mint code
                        </button>
                        <button
                          onClick={() => declineRequest(r.id)}
                          className="font-mono text-xs text-smoke hover:text-acid"
                        >
                          Decline
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => removeRequest(r.id)}
                      className="font-mono text-xs text-smoke hover:text-red-400"
                    >
                      Delete
                    </button>
                  </div>

                  {openNote === r.id && r.note && (
                    <div className="md:col-span-4 mt-2 pt-3 border-t border-paper/10">
                      <p className="font-body text-sm text-paper whitespace-pre-wrap">
                        {r.note}
                      </p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
      </section>

      <h2 className="font-display font-bold text-lg text-paper mb-4">Codes</h2>

      {/* Create form */}
      <form
        onSubmit={create}
        className="grid grid-cols-1 md:grid-cols-[2fr_2fr_auto] gap-3 mb-12 p-4 border border-paper/10"
      >
        <input
          type="text"
          value={employer}
          onChange={(e) => setEmployer(e.target.value)}
          placeholder="Employer name (e.g. Acme Corp)"
          required
          className="font-mono text-sm bg-transparent border border-paper/20 px-3 py-2 text-paper placeholder:text-smoke/50 focus:outline-none focus:border-acid"
        />
        <input
          type="text"
          value={customCode}
          onChange={(e) => setCustomCode(e.target.value)}
          placeholder="Custom code (optional, auto-generated if empty)"
          className="font-mono text-sm bg-transparent border border-paper/20 px-3 py-2 text-paper placeholder:text-smoke/50 focus:outline-none focus:border-acid"
        />
        <button
          type="submit"
          disabled={creating || !employer.trim()}
          className="font-mono text-xs tracking-widest uppercase border border-acid bg-acid text-ink px-4 py-2 hover:bg-transparent hover:text-acid transition-colors disabled:opacity-40"
        >
          {creating ? "Creating…" : "Generate"}
        </button>
        {error && (
          <p className="md:col-span-3 font-mono text-xs text-red-400">
            {error}
          </p>
        )}
      </form>

      {/* Codes table */}
      {loading ? (
        <p className="font-mono text-xs text-smoke">Loading…</p>
      ) : codes.length === 0 ? (
        <p className="font-mono text-sm text-smoke">
          No codes yet. Generate one above.
        </p>
      ) : (
        <div className="space-y-2">
          {codes.map((c) => (
            <div
              key={c.code}
              className="border border-paper/10 p-4 grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr_auto] gap-3 items-center"
            >
              <div>
                <p className="font-mono text-sm text-paper">{c.employer}</p>
                <p className="font-mono text-xs text-smoke">
                  Created {fmt(c.createdAt)}
                </p>
              </div>
              <div>
                <code className="font-mono text-xs text-acid break-all">
                  {c.code}
                </code>
                <button
                  onClick={() => copyLink(c.code)}
                  className="ml-2 font-mono text-xs text-smoke hover:text-acid"
                  title="Copy invite link"
                >
                  [copy link]
                </button>
              </div>
              <div>
                <p className="font-mono text-xs text-paper">
                  {c.logs.length} {c.logs.length === 1 ? "open" : "opens"}
                </p>
                {c.logs[0] && (
                  <p className="font-mono text-xs text-smoke">
                    Last: {fmt(c.logs[0].ts)}
                  </p>
                )}
                {c.logs.length > 0 && (
                  <button
                    onClick={() =>
                      setOpenLogs(openLogs === c.code ? null : c.code)
                    }
                    className="font-mono text-xs text-acid hover:underline"
                  >
                    {openLogs === c.code ? "hide logs" : "view logs"}
                  </button>
                )}
              </div>
              <div className="flex flex-col gap-1 items-end">
                <span
                  className={`font-mono text-xs px-2 py-0.5 border ${
                    c.active
                      ? "border-acid/40 text-acid"
                      : "border-smoke/40 text-smoke"
                  }`}
                >
                  {c.active ? "Active" : "Revoked"}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setActive(c.code, c.active ? "revoke" : "activate")
                    }
                    className="font-mono text-xs text-smoke hover:text-acid"
                  >
                    {c.active ? "Revoke" : "Activate"}
                  </button>
                  <button
                    onClick={() => remove(c.code)}
                    className="font-mono text-xs text-smoke hover:text-red-400"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {openLogs === c.code && (
                <div className="md:col-span-4 mt-2 pt-3 border-t border-paper/10">
                  <table className="w-full font-mono text-xs">
                    <thead className="text-smoke">
                      <tr>
                        <th className="text-left pb-2">When</th>
                        <th className="text-left pb-2">IP</th>
                        <th className="text-left pb-2">User agent</th>
                      </tr>
                    </thead>
                    <tbody className="text-paper">
                      {c.logs.map((l, i) => (
                        <tr key={i} className="border-t border-paper/5">
                          <td className="py-1 pr-3">{fmt(l.ts)}</td>
                          <td className="py-1 pr-3">{l.ip}</td>
                          <td className="py-1 truncate max-w-md text-smoke">
                            {l.ua}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
