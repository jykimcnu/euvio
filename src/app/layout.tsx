import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./LanguageContext";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EuVio Inc.",
  description: "Deep-Tech Microbiome Platform",
  viewport: "width=device-width, initial-scale=1", // 🔥 모바일 필수
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${inter.variable} antialiased bg-slate-50 text-slate-900 overflow-x-hidden`}
      >
        <LanguageProvider>
          <Navbar />
          <div className="pt-24 md:pt-28">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}