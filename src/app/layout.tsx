import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlipN",
  description: "FlipN Waitlist"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"
        />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
