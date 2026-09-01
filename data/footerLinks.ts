export type FooterLink = {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "resume" | "email";
  external?: boolean;
};

const footerLinks: FooterLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jed-delich/",
    icon: "linkedin",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/jeddelich",
    icon: "github",
    external: true,
  },
  {
    label: "Resume",
    href: "/Jed_Delich_Resume.pdf",
    icon: "resume",
    external: true,
  },
  {
    label: "Email",
    href: "#connect",
    icon: "email",
  },
];

export default footerLinks;
