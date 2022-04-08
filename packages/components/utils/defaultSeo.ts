import { IS_DEV } from "./constants";

export const defaultSeo = () => ({
  canonical: IS_DEV ? "http://localhost:3005" : "https://gala-inscription.web.app/",
  title: "Inscription gala fin d'année",
  description: "Inscription au gala de fin d'année",
  openGraph: {
    type: "website",
    locale: "fr",
    url: "https://gala-inscription.web.app/",
    title: "Inscription gala fin d'année",
    description: "Inscription au gala de fin d'année",
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
