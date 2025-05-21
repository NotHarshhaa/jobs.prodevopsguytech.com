import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

// Export middleware config first
export const config = {
  matcher: [
    "/admin/:path*",
    "/settings/:path*",
    "/jobs/new",
    "/jobs/success",
  ]
};

// Only protect specific routes
export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/login",
    },
  }
); 