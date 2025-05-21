"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function AdminNavbar() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="px-3">
      <div className="m-auto flex h-10 max-w-5xl items-center justify-between gap-2">
        <Link href="/admin" className="font-semibold underline">
          Admin Dashboard
        </Link>
        <div className="space-x-2">
          <span className="font-semibold">
            {session?.user.username}
          </span>
          <button
            onClick={async () => {
              await signOut({ redirect: false });
              router.push("/");
            }}
            className="underline"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
