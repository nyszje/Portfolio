"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

export default function LangSwitcher({ current }: { current: Locale }) {
  const [pending, setPending] = useState(false);

  async function set(locale: Locale) {
    if (locale === current || pending) return;
    setPending(true);
    try {
      await fetch("/api/locale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale }),
      });
      window.location.reload();
    } catch {
      setPending(false);
    }
  }

  return (
    <span className="font-mono text-xs tracking-widest uppercase text-paper font-medium flex items-center gap-1">
      <button
        type="button"
        onClick={() => set("en")}
        aria-pressed={current === "en"}
        disabled={pending}
        className={
          current === "en"
            ? "text-paper"
            : "text-paper/40 hover:text-paper transition-colors"
        }
      >
        EN
      </button>
      <span className="text-paper/30" aria-hidden="true">/</span>
      <button
        type="button"
        onClick={() => set("pl")}
        aria-pressed={current === "pl"}
        disabled={pending}
        className={
          current === "pl"
            ? "text-paper"
            : "text-paper/40 hover:text-paper transition-colors"
        }
      >
        PL
      </button>
    </span>
  );
}
