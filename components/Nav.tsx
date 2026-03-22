"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/CV_Tomala_Natalia.pdf", label: "CV ↓", external: true },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-[10000] flex flex-col bg-ink">
      {/* Availability banner */}
      <div className="border-b border-acid px-6 md:px-10 py-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
        <span className="font-mono text-xs tracking-widest uppercase text-paper font-medium flex items-center gap-2">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          Open to new roles
        </span>
        <span className="font-mono text-xs text-paper/30 hidden sm:inline">·</span>
        <span className="font-mono text-xs tracking-widest uppercase text-paper font-medium">
          Full-time
        </span>
        <span className="font-mono text-xs text-paper/30 hidden sm:inline">·</span>
        <span className="font-mono text-xs tracking-widest uppercase text-paper font-medium">
          Product Design · Product Engineering
        </span>
      </div>

      {/* Nav links */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-5 mix-blend-difference">
        <Link
          href="/"
          aria-label="Natalia Tomala — home"
          className="font-display font-bold text-sm tracking-widest uppercase text-paper hover:text-acid transition-colors duration-200"
        >
          NT
        </Link>

        <ul className="flex gap-8 items-center">
          {links.map((link) =>
            link.external ? (
              <li key={link.href}>
                <a
                  href={link.href}
                  download
                  className="nav-link font-mono text-xs tracking-wider uppercase text-paper/60 hover:text-acid transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "nav-link font-mono text-xs tracking-wider uppercase transition-colors duration-200",
                    pathname?.startsWith(link.href)
                      ? "text-acid active"
                      : "text-paper/60 hover:text-paper"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
