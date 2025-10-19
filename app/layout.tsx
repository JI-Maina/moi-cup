import type { Metadata } from "next";
import { Montserrat, Lato, Open_Sans } from "next/font/google";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lato",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "MOI CUP 2025",
  description: "The Official Website of the MOI CUP 2025 Football Tournament.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${lato.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
