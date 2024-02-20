import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "admin dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-neutral-950 text-white">{children}</body>
    </html>
  );
}
