import type { Metadata } from "next";

import "./globals.css";
import TanStackProvider from "@/providers/TanstackProvider";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Search Github Users",
  description: "Search Github users by username",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className={inter.className}>
        <TanStackProvider>
          <Header />
          {children}
        </TanStackProvider>
        <Toaster />
      </body>
    </html>
  );
}
