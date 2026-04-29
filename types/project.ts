export interface Project {
  img?: {
    src: string;
    alt: string;
  };
  title: string;
  subtitle?: string[];
  description: string;
  githubLink?: {
    href: string;
    text: string;
  };
  vercelLink?: {
    href: string;
    text: string;
  };
}