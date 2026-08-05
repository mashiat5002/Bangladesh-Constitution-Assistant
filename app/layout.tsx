import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bangladesh Constitutional QA",
  description: "Ask questions about the Constitution of Bangladesh",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
