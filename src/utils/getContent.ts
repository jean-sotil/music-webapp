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
 * Returns all products with localized content.
 * @param lang - The desired language ('en' or 'es').
 * @returns An array of product objects with merged localized data.
 */
export function getAllProducts(lang: Langs) {
  return getLocalizedContent(lang).products.items;
}

/**
 * Returns a single product by slug with localized content.
 * @param id - The slug of the product.
 * @param lang - The desired language ('en' or 'es').
 * @returns A product object or undefined if not found.
 */
export function getProductById(id: number, lang: Langs) {
  const product = getAllProducts(lang).find((p) => p.id === id);

  if (!product) {
    return undefined;
  }

  return product;
}

/**
 * Returns a single product by slug with localized content.
 * @param slug - The slug of the product.
 * @param lang - The desired language ('en' or 'es').
 * @returns A product object or undefined if not found.
 */
export function getProductBySlug(slug: string, lang: Langs) {
  const product = getAllProducts(lang).find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug,
  );

  if (!product) {
    return undefined;
  }

  return product;
}

/**
 * Returns default lang
 * @returns defaultLang value
 */
export function getDefaultLang() {
  return content.settings.defaultLang;
}
