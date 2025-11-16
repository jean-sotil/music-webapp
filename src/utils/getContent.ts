import { content } from "@/data/content";
import type { Langs, LocalizedContent } from "@/types/content";

/**
 * Returns the entire content object.
 * @returns {ContentType} The parsed content of the .json file.
 */
export function getContent() {
  return content;
}

/**
 * Returns content for a specific language.
 * @param lang - The desired language ('en' or 'es').
 * @returns The localized text content.
 */
export function getLocalizedContent(lang: Langs): LocalizedContent {
  return content[lang];
}
/**
 * Returns default lang
 * @returns defaultLang value
 */
export function getDefaultLang() {
  return content.settings.defaultLang;
}
