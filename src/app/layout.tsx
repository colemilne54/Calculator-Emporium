import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderNavBar from "@/components/ui/HeaderNavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Calculator Emporium",
  description: "An Emporium of Calculators made by Cole Milne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderNavBar />
        {children}
      </body>
    </html>
  );
}
