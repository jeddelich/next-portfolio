export type ExperienceItem = {
  role: string;
  company?: string;
  period?: string;
  bullets: string[];
};

const experience: ExperienceItem[] = [
  {
    role: "Where I Am Now",
    company: "Current",
    bullets: [
      "Freelancing for small businesses like Alicia Joy Design rebuilding their site with Next.js and TypeScript.",
      "Skillfully utilizing AI tools such as CoPilot and Claude, and exploring Notion with a certified admin.",
      "Optimizing and performance testing my old projects with React Testing Library and Jest.",
      "Growing daily as a Full-Stack Developer, deepening my Node.js and other backend skills.",
    ],
  },
  {
    role: "My Return To Tech",
    company: "Internships",
    bullets: [
      "At Skinstric.ai, I shipped a real-time AI skincare analysis platform with React, Next.js, and Typescript.",
      "I worked with Figma translating the designs into responsive UI/UX and key features assisting the pipeline.",
      "Thrived in a git environment, with PR reviews, and best practices while working on products for FES.",
    ],
  },
  {
    role: "Then Continued",
    company: "Other Jobs",
    bullets: [
      "I worked on a sailboat named Renewal for two years teaching students technical nautical terms.",
      "Traveled to 35+ countries, attending conferences, counseling MKs, and exploring the world!",
      "For four years as Pastoral Assistant, I planned and led meetings on a weekly basis.",
      "Refereed multiple sports, developing my communication and decision-making under pressure."
    ],
  },
  {
    role: "How My Journey Started",
    company: "Origins",
    bullets: [
      "As a high schooler, spent countless hours learning and building JavaScript projects on Khan Academy.",
      "Then worked under Udacity to pick up two nanodegrees in programming and business analytics.",
      "Eventually became proficient in React, Next.js, and TypeScript, earning my certificate from FES.",
    ],
  },
];

export default experience;
