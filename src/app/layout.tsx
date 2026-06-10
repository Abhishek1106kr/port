import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhishek Kumar Chauhan — AI/ML Engineer & DevOps",
  description:
    "Abhishek Kumar Chauhan — CS (AI/ML) & Aerospace undergraduate, DevOps Intern at Nexavise. Specialising in architecting intelligent systems and automating complex workflows that scale.",
  openGraph: {
    title: "Abhishek Kumar Chauhan",
    description:
      "AI/ML Systems · DevOps & Automation · Aerospace Data Architecture",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
