import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Study Masters in Ireland | Education State - Free Consulting for Malaysian Students",
  description:
    "Get free consulting for your Master's degree in Ireland. Top universities, 2-year work visa, affordable tuition. 14+ years experience helping 4,782+ students. Apply for September 2026!",
  keywords: [
    "study in Ireland",
    "masters degree Ireland",
    "Malaysia study abroad",
    "Irish universities",
    "postgraduate Ireland",
    "education consultant",
    "study abroad Malaysia",
  ],
  openGraph: {
    title: "Study Masters in Ireland | Education State",
    description:
      "Your path to a world-class Master's degree in Ireland. Free consulting for Malaysian students.",
    type: "website",
    locale: "en_MY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
