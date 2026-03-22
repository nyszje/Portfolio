import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CursorDot from "@/components/CursorDot";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Natalia Tomala — Product Designer",
  description:
    "Product Designer specialising in UX research, design systems, and 0→1 product development.",
  openGraph: {
    title: "Natalia Tomala — Product Designer",
    description:
      "Portfolio of Natalia Tomala — Product Designer at the intersection of research, systems thinking, and product engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="grain bg-ink text-paper min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <div className="sticky top-0 z-[10000] bg-acid text-ink w-full">
          <div className="px-6 md:px-10 py-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
            <span className="font-mono text-xs tracking-widest uppercase font-medium">
              Availability: <strong>ASAP</strong>
            </span>
            <span className="font-mono text-xs text-ink/40 hidden sm:inline">·</span>
            <span className="font-mono text-xs tracking-widest uppercase font-medium">
              Full-time
            </span>
            <span className="font-mono text-xs text-ink/40 hidden sm:inline">·</span>
            <span className="font-mono text-xs tracking-widest uppercase font-medium">
              Product Design · Product Engineering
            </span>
          </div>
        </div>
        <Nav />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <CursorDot />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
