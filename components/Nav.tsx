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
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <nav className="flex items-center justify-between px-6 md:px-10 py-6">
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
