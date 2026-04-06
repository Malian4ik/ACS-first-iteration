import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "../globals.css";
import { getDictionary } from "@/lib/dictionaries";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang === "en" ? "en" : "ru";
  const t = getDictionary(locale).meta;
  return {
    title: t.title,
    description: t.description
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const locale = lang === "en" ? "en" : "ru";

  return (
    <html lang={locale}>
      <body className={spaceGrotesk.variable}>
        {children}
      </body>
    </html>
  );
}
