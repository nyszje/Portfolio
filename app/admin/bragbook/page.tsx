import { isAdmin, isRedisConfigured } from "@/lib/bragbook";
import PasswordGate from "./PasswordGate";
import AdminPanel from "./AdminPanel";

export const metadata = {
  title: "Admin - Bragbook",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminBragbookPage() {
  const admin = await isAdmin();
  if (!admin) {
    return <PasswordGate />;
  }
  return <AdminPanel unconfigured={!isRedisConfigured()} />;
}
