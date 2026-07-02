import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "APIIS",
  description:
    "Build and deliver structured learning programs in days, not months. Lumina Learn gives L&D teams the tools to create, distribute, and measure learning at any scale.",
  keywords: [
    "LMS",
    "learning management system",
    "e-learning",
    "employee training",
    "online courses",
  ],
  openGraph: {
    title: "Lumina Learn — Modern Learning for Modern Teams",
    description:
      "Create, deliver, and track learning programs at any scale. Free for up to 5 learners.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
