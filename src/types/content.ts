export type Langs = "en" | "es";

export type LocalizedContent = {
  navigation: {
    releases: string;
    listen: string;
    contact: string;
  };
  hero: {
    tagline: string;
    cta: string;
  };
  releases: {
    title: string;
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
  products: {
    id: number;
    title: string;
    image: string;
    isNewProduct: boolean;
    url: string;
  }[];
  en: LocalizedContent;
  es: LocalizedContent;
};
