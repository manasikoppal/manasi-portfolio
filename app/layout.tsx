import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CursorGlow from "./components/ui/CursorGlow";
import CursorAsterisk from "./components/ui/CursorAsterisk";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manasi Manoj Koppal — Data Scientist & ML Engineer",
  description:
    "Portfolio of Manasi Manoj Koppal — Data Scientist, ML Engineer, and Analyst skilled in Python, NLP, TensorFlow, and cloud data pipelines. Seeking full-time roles, May 2026.",
  keywords: [
    "Data Scientist",
    "ML Engineer",
    "Machine Learning",
    "NLP",
    "Python",
    "Data Analytics",
    "Data Engineer",
    "Manasi Koppal",
    "Indiana University",
    "TensorFlow",
    "PyTorch",
  ],
  authors: [{ name: "Manasi Manoj Koppal" }],
  openGraph: {
    title: "Manasi Manoj Koppal — Data Scientist & ML Engineer",
    description:
      "Portfolio showcasing ML projects, NLP pipelines, data engineering, and analytics work.",
    type: "website",
    locale: "en_US",
    siteName: "Manasi Manoj Koppal",
  },
  twitter: {
    card: "summary",
    title: "Manasi Manoj Koppal — Data Scientist & ML Engineer",
    description:
      "Portfolio showcasing ML projects, NLP pipelines, data engineering, and analytics work.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        <CursorGlow />
        <CursorAsterisk />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
