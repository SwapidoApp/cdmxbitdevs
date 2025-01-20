import { SiteConfig } from "./types";

// Get the base URL from Vercel environment or fallback
const getBaseUrl = () => {
  return "https://www.cdmxbitdevs.org";
};

export const config: SiteConfig = {
  title: "CDMX Bitcoin Developers",
  tagline:
    "CDMX Bitcoin Developers es una comunidad dedicada a la investigación y desarrollo de Bitcoin",
  description:
    "CDMX Bitcoin Developer (BitDevs) es un seminario socrático dedicado a la discusión del desarrollo e investigación continua de Bitcoin.",
  baseUrl: getBaseUrl(),
  menu: [
    { name: "Eventos", url: "/events" },
    { name: "Meetup", url: "https://lu.ma/casadesatoshi", external: true },
  ],
};
