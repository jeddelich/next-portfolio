export type TechStackItem = {
  icon: string;
  name: string;
  category: string;
  group: "Frameworks" | "Languages" | "Styling" | "Backend" | "Tools";
};

const techStack: TechStackItem[] = [
  {
    icon: "R",
    name: "React",
    category: "UI library",
    group: "Frameworks",
  },
  {
    icon: "N",
    name: "Next.js",
    category: "Full-stack React",
    group: "Frameworks",
  },
  {
    icon: "TS",
    name: "TypeScript",
    category: "Typed JavaScript",
    group: "Languages",
  },
  {
    icon: "JS",
    name: "JavaScript",
    category: "ES2024+",
    group: "Languages",
  },
  {
    icon: "tw",
    name: "Tailwind CSS",
    category: "Utility-first",
    group: "Styling",
  },
  {
    icon: "g",
    name: "Git Environment",
    category: "Version control",
    group: "Tools",
  },
  {
    icon: "J",
    name: "Jest",
    category: "Testing",
    group: "Tools",
  },
  {
    icon: "F",
    name: "Firebase",
    category: "Auth & data",
    group: "Backend",
  },
  {
    icon: "Fi",
    name: "Figma",
    category: "Design handoff",
    group: "Tools",
  },
  {
    icon: "$",
    name: "Stripe",
    category: "Payments",
    group: "Backend",
  },
  {
    icon: "V",
    name: "Vercel",
    category: "Hosting",
    group: "Tools",
  },
  {
    icon: "WP",
    name: "WordPress",
    category: "CMS",
    group: "Tools",
  },
  {
    icon: "SG",
    name: "SiteGround",
    category: "Hosting",
    group: "Tools",
  },
  {
    icon: "Z",
    name: "Zustand",
    category: "State management",
    group: "Frameworks",
  },
  {
    icon: "#",
    name: "CSS",
    category: "Modern CSS",
    group: "Styling",
  },
  {
    icon: "M",
    name: "Material UI",
    category: "Component library",
    group: "Frameworks",
  },
];

export default techStack;
