import type { ContentType } from "@/types/content";

export const content: ContentType = {
  langs: ["en", "es"],
  settings: {
    name: "DJ JEAN PASTOR",
    title: "DJ JEAN PASTOR | Official Website",
    description:
      "The official website of DJ JEAN PASTOR. Listen to the latest releases and get in touch for bookings.",
    theme: {
      primary: "#FF0077",
      secondary: "#202020",
      background: "#FFFFFF",
      text: "#000000",
    },
    defaultLang: "en",
  },
  contact: {
    email: "booking@jeanpastordj.com",
    instagram: "https://instagram.com/jeanpastordj",
    spotify: "https://open.spotify.com/artist/jeanpastordj",
  },
  products: [
    {
      id: 1,
      title: "Construction Kit vol. 1",
      image: "https://picsum.photos/200/300",
      isNewProduct: true,
      url: "https://spotify.link/quantum-leap",
    },
    {
      id: 2,
      title: "Neon Dreams",
      image: "https://picsum.photos/200/300",
      isNewProduct: false,
      url: "https://spotify.link/neon-dreams",
    },
    {
      id: 3,
      title: "Gridlock",
      image: "https://picsum.photos/200/300",
      isNewProduct: false,
      url: "https://spotify.link/gridlock",
    },
    {
      id: 4,
      title: "Another Level",
      image: "https://picsum.photos/200/300",
      isNewProduct: false,
      url: "https://spotify.link/gridlock",
    },
    {
      id: 5,
      title: "Skyline",
      image: "https://picsum.photos/200/300",
      isNewProduct: false,
      url: "https://spotify.link/gridlock",
    },
    {
      id: 6,
      title: "Midnight Vibes",
      image: "https://picsum.photos/200/300",
      isNewProduct: false,
      url: "https://spotify.link/gridlock",
    },
  ],
  en: {
    navigation: {
      releases: "Releases",
      listen: "Listen",
      contact: "Contact",
    },
    hero: {
      tagline: "The Future of Sound is Here",
      cta: "SHOP NOW",
    },
    releases: {
      title: "Latest Releases",
    },
    sections: {
      latestWork: "Latest Work",
      fullCatalog: "Full Catalog & Playlists",
      getInTouch: "Get In Touch",
      contactPrompt:
        "For bookings, remixes, and business inquiries, please email:",
    },
  },
  es: {
    navigation: {
      releases: "Lanzamientos",
      listen: "Escuchar",
      contact: "Contacto",
    },
    hero: {
      tagline: "El futuro del sonido está aquí",
      cta: "COMPRAR AHORA",
    },
    releases: {
      title: "Ultimos Lanzamientos",
    },
    sections: {
      latestWork: "Últimos Trabajos",
      fullCatalog: "Catálogo Completo y Listas",
      getInTouch: "Ponte en Contacto",
      contactPrompt:
        "Para reservas, remezclas y consultas de negocios, por favor envía un correo electrónico:",
    },
  },
};
