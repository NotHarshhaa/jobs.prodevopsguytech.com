import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminEmail || !adminPassword) {
          console.error("Admin credentials not configured in environment variables");
          return null;
        }

        if (credentials.email !== adminEmail || credentials.password !== adminPassword) {
          return null;
        }

        return {
          id: "admin",
          email: adminEmail,
          name: "Admin",
          isAdmin: true
        };
      }
    })
  ],
  pages: {
    signIn: "/login",
    error: "/login"
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string;
        session.user.isAdmin = true;
      }
      return session;
    },
    async jwt({ token }) {
      token.isAdmin = true;
      return token;
    }
  },
  session: {
    strategy: "jwt",
  }
}; 