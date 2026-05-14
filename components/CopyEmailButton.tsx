"use client";

import { useState } from "react";

const EMAIL = "nat.maz98@gmail.com";

export default function CopyEmailButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const copiedLabel =
    typeof document !== "undefined" && document.documentElement.lang.startsWith("en")
      ? "Copied!"
      : "Skopiowano!";

  return (
    <button type="button" onClick={handleClick} className={className} aria-label={EMAIL}>
      {copied ? `✓ ${copiedLabel}` : children}
    </button>
  );
}
