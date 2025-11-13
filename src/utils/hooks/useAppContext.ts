import { useContext } from "react";

import type { AppContextType } from "@/context";
import { AppContext } from "@/context";

export const useAppContext = () => {
  const context = useContext(AppContext) as AppContextType;
  if (context === null) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
