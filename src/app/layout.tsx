import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Layout from "@/components/organisms/Layout";

import AppContext from "@/context";

import { getContent } from "@/utils/content-utils";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const customStyles = {
    "--color-primary": content.settings.theme.primary,
    "--color-secondary": content.settings.theme.secondary,
    "--color-background": content.settings.theme.background,
    "--color-text": content.settings.theme.text,
  } as React.CSSProperties;

  return (
    <html lang="en" className={roboto.className}>
      <head></head>
      <body style={customStyles}>
        <AppContext content={content}>
          <Layout>{children}</Layout>
        </AppContext>
      </body>
    </html>
  );
}
