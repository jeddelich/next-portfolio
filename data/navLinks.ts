export type NavLink = {
  number: string;
  href: string;
  label: string;
  mobileLabel?: string;
};

const navLinks: NavLink[] = [
  {
    number: "01.",
    href: "#about",
    label: "About Me",
    mobileLabel: "About",
  },
  {
    number: "02.",
    href: "#tech",
    label: "Tech Used",
  },
  {
    number: "03.",
    href: "#clients",
    label: "Past Clients",
  },
  {
    number: "04.",
    href: "#resume",
    label: "My Résumé",
  },
];

export default navLinks;
