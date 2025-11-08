import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmPlexSansArabic = localFont({
  src: "../public/fonts/IBMPlexSansArabic-SemiBold.ttf",
  variable: "--font-arabic",
  weight: "600",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IDEAR - Transforming Ideas into Living Spaces",
  description: "تحويل الأفكار إلى فضاءات حية تلهم الانتماء",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexSansArabic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
