import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { geistMono, geistSans } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Instagram Clone",
  description: "Instagram main feed clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
