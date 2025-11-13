import fs from "node:fs";
import path from "node:path";

export type Langs = "en" | "es";

type LocalizedContent = {
  navigation: {
    releases: string;
    listen: string;
    contact: string;
  };
  hero: {
    tagline: string;
    cta: string;
  };
  sections: {
    latestWork: string;
    fullCatalog: string;
    getInTouch: string;
    contactPrompt: string;
  };
};

export type ContentType = {
  langs: Langs[];
  settings: {
    name: string;
    title: string;
    description: string;
    theme: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
    defaultLang: Langs;
  };
  contact: {
    email: string;
    instagram: string;
    spotify: string;
  };
  releases: {
    id: number;
    title: string;
    coverPath: string;
    isNewRelease: boolean;
    listenLink: string;
  }[];
  en: LocalizedContent;
  es: LocalizedContent;
};

const CONTENT_FILE_NAME = "data.json";
const CONTENT_DIR = "/src/utils";

/**
  * Reads the json file and returns its parsed content.
  @returns {ContentType} The parsed content of the .json file.
 */
export function getContent(): ContentType {
  const filePath = path.join(process.cwd(), CONTENT_DIR, CONTENT_FILE_NAME);
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents) as ContentType;
  } catch (error) {
    console.error("Error reading content file:", error);
    throw new Error("Could not find content data. Check file path.");
  }
}

/**
 * Returns content for a specific language.
 * @param lang - The desired language ('en' or 'es').
 * @returns The localized text content.
 */
export function getLocalizedContent(lang: Langs): LocalizedContent {
  const content = getContent();
  return content[lang];
}

/**
 * Returns all releases from the content.
 * @returns An array of release objects.
 */
export function getAllReleases() {
  const content = getContent();
  return content.releases;
}

/**
 * Returns default lang
 * @returns defaultLang value
 */
export function getDefaultLang() {
  const content = getContent();
  return content.settings.defaultLang;
}
