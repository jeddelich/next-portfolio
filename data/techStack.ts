export type TechStackItem = {
  icon: string;
  name: string;
  category: string;
};

const techStack: TechStackItem[] = [
  {
    icon: "R",
    name: "React",
    category: "UI library",
  },
  {
    icon: "N",
    name: "Next.js",
    category: "Full-stack React",
  },
  {
    icon: "TS",
    name: "TypeScript",
    category: "Typed JavaScript",
  },
  {
    icon: "JS",
    name: "JavaScript",
    category: "ES2024+",
  },
  {
    icon: "tw",
    name: "Tailwind CSS",
    category: "Utility-first",
  },
  {
    icon: "#",
    name: "CSS",
    category: "Modern CSS",
  },
  {
    icon: "M",
    name: "Material UI",
    category: "Component library",
  },
  {
    icon: "F",
    name: "Firebase",
    category: "Auth & data",
  },
  {
    icon: "$",
    name: "Stripe",
    category: "Payments",
  },
  {
    icon: "Z",
    name: "Zustand",
    category: "State management",
  },
  {
    icon: "J",
    name: "Jest",
    category: "Testing",
  },
  {
    icon: "V",
    name: "Vercel",
    category: "Hosting",
  },
  {
    icon: "Fi",
    name: "Figma",
    category: "Design handoff",
  },
  {
    icon: "g",
    name: "Git",
    category: "Version control",
  },
];

export default techStack;
