export interface Post {
  title: string;
  date: string;
  type: "socratic" | "whitepaper";
  meetup?: string;
  content: string;
  slug: string;
}

export interface SiteConfig {
  title: string;
  tagline: string;
  description: string;
  baseUrl: string;
  menu: {
    name: string;
    url: string;
    external?: boolean;
  }[];
}
