import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: "DevOps & Cloud Jobs | ProDevOpsGuy Tech",
    template: "%s | ProDevOpsGuy Tech",
  },
  description: "Find your dream DevOps and Cloud job. Browse thousands of opportunities from top companies, including remote positions with competitive salaries.",
  keywords: ["DevOps jobs", "Cloud jobs", "Remote jobs", "Technology careers", "Software engineering", "Infrastructure", "AWS", "Azure", "GCP"],
  authors: [{ name: "ProDevOpsGuy Tech" }],
  creator: "ProDevOpsGuy Tech",
  publisher: "ProDevOpsGuy Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jobs.prodevopsguytech.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jobs.prodevopsguytech.com',
    title: 'DevOps & Cloud Jobs | ProDevOpsGuy Tech',
    description: 'Find your dream DevOps and Cloud job. Browse thousands of opportunities from top companies.',
    siteName: 'ProDevOpsGuy Tech',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ProDevOpsGuy Tech - DevOps & Cloud Jobs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevOps & Cloud Jobs | ProDevOpsGuy Tech',
    description: 'Find your dream DevOps and Cloud job. Browse thousands of opportunities from top companies.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-w-[350px] antialiased`}>
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center w-full min-h-[calc(100vh-160px)] px-2 sm:px-4 md:px-6 lg:px-8 py-8 animate-fadein">
          <div className="w-full max-w-7xl mx-auto">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
