import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DBooks — App Discontinued",
  description: "DBooks PWA has been shut down. Visit our new app to continue reading.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
