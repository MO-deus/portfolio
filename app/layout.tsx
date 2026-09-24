import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Kush Waikar — Backend & Product Engineer",
  description:
    "Software engineer specialising in backend systems, distributed infrastructure, and product engineering. Open to full-time roles — can join immediately.",
  keywords: ["Kush Waikar", "Software Engineer", "Backend Engineer", "Full Stack Engineer", "Next.js", "Kubernetes", "TypeScript"],
  authors: [{ name: "Kush Waikar", url: "https://github.com/MO-deus" }],
  openGraph: {
    type: "website",
    title: "Kush Waikar — Backend & Product Engineer",
    description: "Software engineer specialising in backend systems, distributed infrastructure, and product engineering.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
