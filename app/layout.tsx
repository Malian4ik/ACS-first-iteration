import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "Avulus Cyber Space",
  description: "Stitch-based frontend conversion for Avulus Cyber Space, CyberClub, and Restaurant."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>
        {children}
      </body>
    </html>
  );
}
