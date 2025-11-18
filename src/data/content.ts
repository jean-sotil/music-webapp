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
    products: {
      cta: "Check details",
      items: [
        {
          id: 1,
          title: "Construction Kit vol. 1",
          description: "The first volume of the Construction Kit series.",
          image: "https://picsum.photos/200/300",
          isNewProduct: true,
          url: "https://spotify.link/gridlock",
        },
        {
          id: 2,
          title: "Neon Dreams",
          description: "A journey through neon-lit soundscapes.",
          image: "https://picsum.photos/200/300",
          isNewProduct: false,
          url: "https://spotify.link/gridlock",
        },
        {
          id: 3,
          title: "Gridlock",
          description: "The sound of the city.",
          image: "https://picsum.photos/200/300",
          isNewProduct: false,
          url: "https://spotify.link/gridlock",
        },
        {
          id: 4,
          title: "Another Level",
          description: "Taking it to the next level.",
          image: "https://picsum.photos/200/300",
          isNewProduct: false,
          url: "https://spotify.link/gridlock",
        },
        {
          id: 5,
          title: "Skyline",
          description: "An ode to the city skyline.",
          image: "https://picsum.photos/200/300",
          isNewProduct: false,
          url: "https://spotify.link/gridlock",
        },
        {
          id: 6,
          title: "Midnight Vibes",
          description: "The perfect soundtrack for a night drive.",
          image: "https://picsum.photos/200/300",
          isNewProduct: false,
          url: "https://spotify.link/gridlock",
        },
      ],
      notFound: "Product not found",
      title: "Online Shop",
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
    products: {
      cta: "Ver detalles",
      items: [
        {
          id: 1,
          title: "Construction Kit vol. 1",
          description: "El primer volumen de la serie Construction Kit.",
          image: "https://picsum.photos/200/300",
          isNewProduct: true,
          url: "https://spotify.link/gridlock",
        },
        {
          id: 2,
          title: "Sueños de Neón",
          description:
            "Un viaje a través de paisajes sonoros iluminados por neón.",
          image: "https://picsum.photos/200/300",
          isNewProduct: false,
          url: "https://spotify.link/gridlock",
        },
        {
          id: 3,
          title: "Atasco",
          description: "El sonido de la ciudad.",
          image: "https://picsum.photos/200/300",
          isNewProduct: false,
          url: "https://spotify.link/gridlock",
        },
        {
          id: 4,
          title: "Otro Nivel",
          description: "Llevándolo al siguiente nivel.",
          image: "https://picsum.photos/200/300",
          isNewProduct: false,
          url: "https://spotify.link/gridlock",
        },
        {
          id: 5,
          title: "Horizonte",
          description: "Una oda al horizonte de la ciudad.",
          image: "https://picsum.photos/200/300",
          isNewProduct: false,
          url: "https://spotify.link/gridlock",
        },
        {
          id: 6,
          title: "Vibras de Medianoche",
          description: "La banda sonora perfecta para un viaje nocturno.",
          image: "https://picsum.photos/200/300",
          isNewProduct: false,
          url: "https://spotify.link/gridlock",
        },
      ],
      notFound: "Producto no encontrado",
      title: "Tienda Online",
    },
  },
};
