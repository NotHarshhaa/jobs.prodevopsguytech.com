import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "DevOps/Cloud Jobs",
    template: "%s | Flow Jobs",
  },
  description: "Find your dream DevOps/Cloud job.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-w-[350px]`}>
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center w-full min-h-[calc(100vh-160px)] px-2 sm:px-4 md:px-6 py-8 animate-fadein">
          <div className="w-full max-w-6xl mx-auto">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
