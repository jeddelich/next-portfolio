export interface Project {
  img: {
    src: string;
    alt: string;
  };
  title: string;
  subtitle: string;
  description: string;
  githubLink: {
    href: string;
  };
  vercelLink: {
    href: string;
  };
}