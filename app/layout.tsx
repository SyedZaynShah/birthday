import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy 22nd Birthday, Maheen 🌷",
  description: "A special birthday gift for Maheen, turning 22 on October 2, 2026",
  keywords: ["birthday", "Maheen", "22nd birthday", "personal gift"],
  authors: [{ name: "A Friend" }],
  openGraph: {
    title: "Happy 22nd Birthday, Maheen",
    description: "A special birthday website for Maheen",
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
