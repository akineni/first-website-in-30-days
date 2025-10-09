import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Frontend in 30 Days | Build Your First Website",
  description: "Learn to build your first website from scratch in just 30 days.",
  keywords: [
    "frontend development",
    "learn web development",
    "HTML CSS JavaScript",
    "beginner web course",
    "build a website",
    "frontend tutorial",
    "learn coding",
    "30 days challenge",
    "web design basics",
    "frontend in 30 days"
  ],
  openGraph: {
    title: "Frontend in 30 Days | Build Your First Website",
    description: "A 30-day step-by-step course to help you build your first website from scratch.",
    url: "/",
    siteName: "Frontend in 30 Days",
    images: [
      {
        url: "images/site-preview.png",
        width: 1366,
        height: 768,
        alt: "Frontend in 30 Days course preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
