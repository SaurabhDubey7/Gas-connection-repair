import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gas Stove Repair in Hyderabad | 30-60 Min Service",
  description:
    "Professional gas stove repair and pipeline installation in Hyderabad. 30–60 minute response time, same-day service, affordable pricing and experienced technicians.",
  keywords:
    "Gas stove repair Hyderabad, LPG repair Hyderabad, gas pipeline installation Hyderabad, gas leakage repair Hyderabad",
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
        {children}
      </body>
    </html>
  );
}
