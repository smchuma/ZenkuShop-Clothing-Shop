import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "ZenkuShop",
  description: "Clothing Store for all",
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
