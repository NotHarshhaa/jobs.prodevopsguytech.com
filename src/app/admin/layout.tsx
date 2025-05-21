import { Metadata } from "next";
import AdminNavbar from "./AdminNavbar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Admin",
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session?.user.isAdmin) {
    redirect("/login");
  }

  return (
    <>
      <AdminNavbar />
      {children}
    </>
  );
}
