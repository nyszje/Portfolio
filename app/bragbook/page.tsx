import { isRedisConfigured, readSession } from "@/lib/bragbook";
import CodeGate from "./CodeGate";
import BragbookContent from "./BragbookContent";

export const metadata = {
  title: "Bragbook - Natalia Tomala",
  description: "Private case studies and recommendations.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function BragbookPage() {
  if (!isRedisConfigured()) {
    return (
      <section className="px-6 md:px-10 pt-48 pb-24 max-w-xl mx-auto text-center">
        <h1 className="font-display font-extrabold text-display-md text-paper mb-4">
          Bragbook
        </h1>
        <p className="font-body text-sm text-smoke mb-8">
          Bragbook is not configured yet. Please come back soon.
        </p>
        <p className="font-mono text-xs text-smoke/60">
          In the meantime, you can email{" "}
          <a
            href="mailto:nat.maz98@gmail.com?subject=Bragbook%20access%20request"
            className="text-acid hover:underline"
          >
            nat.maz98@gmail.com
          </a>
          .
        </p>
      </section>
    );
  }

  const session = await readSession();
  if (!session) {
    return <CodeGate />;
  }
  return <BragbookContent employer={session.employer} />;
}
