export type ExperienceItem = {
  role: string;
  company?: string;
  number?: number;
  period?: string;
  bullets: string[];
};

const experience: ExperienceItem[] = [
  {
    role: "Where I Am Thriving Today",
    company: "Current Work",
    number: 4,
    bullets: [
      "I'm freelancing contracts--building custom websites for both startup and established businesses.",
      "In addition, I make lives easier as I skillfully suggest, integrate, and oversee AI solutions for clients.",
      "I provide on-going maintenance for past clients including security, updates, performance optimizations.",
      "Lastly, I'm continually growing my tech stack daily as a full-stack developer (currently learning php).",
    ],
  },
  {
    role: "My Time Spent With Real Tech Companies",
    company: "Internships",
    number: 3,  
    bullets: [
      "At Skinstric.ai, I helped build a real-time AI skincare analysis platform with React, Next.js, and Typescript.",
      "I worked with Figma to translate designs into responsive UI and develop key features enabling the pipeline.",
      "Working for FES, I thrived in a git environment with PR reviews, contributing 8 key branches into main.",
    ],
  },
  {
    role: "Where I Continued From There",
    company: "Side Quests",
    number: 2,
    bullets: [
      "First Mate on a sailboat for two years, I learned how to explain hard, technical concepts to young students.",
      "I also traveled to 35+ countries, attending conferences, counseling, and exploring new ways of thinking.",
      "Refereeing for i9 Sports, I developed my decision-making skills and ownership in a fast-paced environment.",
      "Lastly, I planned and led small group meetings of 4-12 people weekly for four years as Pastoral Assistant.",
    ],
  },
  {
    role: "How My Unorthodox Journey Started",
    company: "Origins",
    number: 1,
    bullets: [
      "As a high schooler, I spent countless hours learning and building JavaScript projects on Khan Academy.",
      "Wanting to push further, I picked up two nanodegrees from Udacity in programming and business.",
      "In college, my degree in counseling fueled my passion for problem-solving and people's experiences.",
      "A couple years post-grad, I returned to the field of IT and earned a certificate from the FES program.",
    ],
  },
];

export default experience;
