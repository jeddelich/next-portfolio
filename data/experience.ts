export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

const experience: ExperienceItem[] = [
  {
    role: "Frontend Engineer",
    company: "Freelance",
    period: "Jan 2024 — Present",
    bullets: [
      "Building production web applications for early-stage startups using Next.js, React, and TypeScript.",
      "Architected and shipped a subscription audio platform with Firebase auth and Stripe billing — Summarist.",
      "Translate Figma designs into pixel-perfect, accessible interfaces with a focus on Core Web Vitals.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Loom Studio",
    period: "Jun 2022 — Dec 2023",
    bullets: [
      "Owned the design system migration from styled-components to Tailwind, cutting bundle size 38%.",
      "Built reusable component primitives (modals, toasts, comboboxes) used across 4 product surfaces.",
      "Mentored two junior developers through pair-programming and weekly code review sessions.",
    ],
  },
  {
    role: "Junior Developer",
    company: "Cipher Labs",
    period: "Aug 2020 — May 2022",
    bullets: [
      "Shipped landing pages, marketing sites, and internal tools using React and Next.js.",
      "Worked closely with designers to refine animation, micro-interactions, and accessibility patterns.",
      "Set up CI/CD pipelines and Lighthouse performance budgets for the marketing team.",
    ],
  },
  {
    role: "Becoming a developer",
    company: "Self-taught",
    period: "2018 — 2020",
    bullets: [
      "Pivoted into engineering through self-directed study, freeCodeCamp, and weekend projects.",
      "Built dozens of throwaway side projects to internalize JavaScript fundamentals and the DOM.",
      "Open-sourced first npm package — a small accessibility helper for keyboard focus rings.",
    ],
  },
];

export default experience;
