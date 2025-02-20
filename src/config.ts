import { SiteConfig } from "./types";

// Get the base URL from Vercel environment or fallback
const getBaseUrl = () => {
  return "https://www.cdmxbitdevs.org";
};

export const config: SiteConfig = {
  title: "CDMX Bitcoin Developers",
  tagline:
    "CDMX BitDevs es una comunidad dedicada a la investigación y desarrollo de Bitcoin",
  description:
    "CDMX BitDevs es una comunidad para aquellos interesados en discutir y participar en la investigación y desarrollo de Bitcoin y protocolos relacionados en la Ciudad de México.",
  baseUrl: getBaseUrl(),
  menu: [
    { name: "Eventos", url: "/events.html" },
    {
      name: "Luma (Meetup)",
      url: "https://lu.ma/lacasadesatoshi",
      external: true,
    },
  ],
};
