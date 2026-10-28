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
    href: "#clients",
    label: "Past Clients",
  },
  {
    number: "03.",
    href: "#tech",
    label: "Tech Used",
  },
  {
    number: "04.",
    href: "#resume",
    label: "Experience",
  },
];

export default navLinks;
