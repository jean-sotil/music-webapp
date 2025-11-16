"use client";

import { createContext, useContext, useMemo, useState } from "react";

import type { ContentType, Langs } from "@/utils/getContent";

export type AppContextType = {
  content: ContentType;
  currLang: Langs;
  localizedContent: ContentType[Langs];
  setLang: (lang: Langs) => void;
} | null;

export const AppContext = createContext<AppContextType>(null);

export default function AppContextProvider({
  children,
  content,
  lang,
}: {
  children: React.ReactNode;
  content: ContentType;
  lang: Langs;
}) {
  const [currLang, setCurrLang] = useState(lang);

  const localizedContent = useMemo(
    () => content[currLang],
    [currLang, content],
  );

  return (
    <AppContext.Provider
      value={{
        content,
        currLang,
        localizedContent,
        setLang: setCurrLang,
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
