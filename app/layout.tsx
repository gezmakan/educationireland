import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Starter Template",
  description: "Production-ready Next.js template with auth, database, and dark mode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
