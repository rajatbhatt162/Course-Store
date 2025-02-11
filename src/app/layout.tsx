import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Next.js App",
  description: "A fresh Next.js project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="relative w-full flex items-center justify-center">
        <Navbar />
        </div>
       
        {children}
      </body>
    </html>
  );
}
