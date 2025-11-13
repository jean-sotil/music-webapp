"use client";

import { createContext, useContext, useCallback } from "react";
import type { ContentType } from "@/utils/content-utils";

type AppContextType = {
  content: ContentType;
  getLocalizedContent: (lang: "en" | "es") => ContentType[string];
  lang: "en" | "es";
} | null;

const AppContext = createContext<AppContextType>(null);

export default function AppContextProvider({
  children,
  content,
}: {
  children: React.ReactNode;
  content: ContentType;
}) {
  const lang = content.settings.defaultLang;

  const getLocalizedContent = useCallback(
    (lang: NonNullable<AppContextType>["lang"]) => {
      return content[lang];
    },
    [content]
  );

  return (
    <AppContext.Provider
      value={{
        content,
        getLocalizedContent,
        lang,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext) as AppContextType;
  if (context === null) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
