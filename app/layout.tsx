import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clarity — Understand any document in seconds",
  description:
    "Upload a contract, agreement, or policy. We'll break it down into plain language and tell you what to do.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen antialiased">{children}</body>
    </html>
  );
}
