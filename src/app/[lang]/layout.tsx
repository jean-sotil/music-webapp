import "@/styles/index.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = (await params) as { lang: Langs };

  const customStyles = {
    "--color-primary": content.settings.theme.primary,
    "--color-secondary": content.settings.theme.secondary,
    "--color-background": content.settings.theme.background,
    "--color-text": content.settings.theme.text,
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
