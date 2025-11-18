export type Langs = "en" | "es";

export type LocalizedProduct = {
  description: string;
  id: number;
  image: string;
  isNewProduct: boolean;
  price?: number;
  quantity?: number;
  title: string;
  url: string;
};

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
  products: {
    cta: string;
    items: LocalizedProduct[];
    notFound: string;
    title: string;
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
  en: LocalizedContent;
  es: LocalizedContent;
};
