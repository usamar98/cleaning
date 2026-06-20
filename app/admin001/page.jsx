import { cookies } from "next/headers";
import { ADMIN_COOKIE_NAME, isAdminSessionValue } from "@/lib/adminAuth";
import AdminDashboard from "./AdminDashboard";
import AdminLogin from "./AdminLogin";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isLoggedIn = isAdminSessionValue(cookieStore.get(ADMIN_COOKIE_NAME)?.value);

  return isLoggedIn ? <AdminDashboard /> : <AdminLogin />;
}
