import getNestedValue from "@/utils/getNestedValues";
import { useAppContext } from "./useAppContext";

export const useTranslation = (path: string) => {
  const context = useAppContext();

  if (!context) {
    throw new Error("useTranslation must be used within AppContextProvider");
  }

  const { localizedContent } = context;

  const translation = getNestedValue(localizedContent, path);

  return translation || path; // Fallback to the path itself if translation not found
};
