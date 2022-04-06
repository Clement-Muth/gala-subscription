import { IS_DEV } from "./constants";

export const defaultSeo = () => ({
  canonical: IS_DEV ? "http://localhost:3005" : "https://gala-inscription.web.app/",
  title: "Inscription gala fin d'année",
  description:
    "Une agence web pas comme les autres. Vous êtes un commerce ou une entreprise ? Vous avez besoin d’un site web efficace et performant à la pointe de la technologie. Il sera le point d’entrée de toutes vos communications !",
  openGraph: {
    type: "website",
    locale: "fr",
    url: "https://gala-inscription.web.app/",
    title: "Inscription gala fin d'année",
    description:
      "Une agence web pas comme les autres. Vous êtes un commerce ou une entreprise ? Vous avez besoin d’un site web efficace et performant à la pointe de la technologie. Il sera le point d’entrée de toutes vos communications !",
    defaultImageWidth: 3010,
    defaultImageHeight: 1657,
    images: [
      {
        url: `https://gala-inscription.web.app/static/images/og-image.webp`,
        width: 3010,
        height: 1657,
        alt: "Inscription gala fin d'année"
      }
    ],
    site_name: "gala-inscription"
  }
});
