import "@/styles/index.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import type React from "react";

import Layout from "@/components/organisms/Layout";
import AppContext from "@/context";
import QueryProvider from "@/providers";
import type { Langs } from "@/types/content";
import { getContent } from "@/utils/getContent";

const content = getContent();

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: content.settings.title,
  description: content.settings.description,
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang } = (await params) as { lang: Langs };
  const {
    settings: { theme },
  } = content;

  const customStyles = {
    "--color-primary": theme.primary,
    "--color-secondary": theme.secondary,
    "--color-background": theme.background,
    "--color-text": theme.text,
  } as React.CSSProperties;

  return (
    <html lang={lang} className={roboto.className}>
      <body style={customStyles}>
        <QueryProvider>
          <AppContext content={content} lang={lang}>
            <Layout>{children}</Layout>
          </AppContext>
        </QueryProvider>
      </body>
    </html>
  );
}
