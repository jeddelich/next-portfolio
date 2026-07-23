import { Project } from "@/types/project";

const projects: Project[] = [
  {
    img: {
      src: "/alicia_joy_design_ss.png",
      alt: "AliciaJoyDesign",
    },
    title: "Alicia Joy Design",
    subtitle: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "Figma", "Git", "Playwright"],
    description:
      "Finished in July 2026, this modern portfolio website features 24 clients (both real and conceptual), dynamic galleries (100+ displayed images), multiple carousels (for logos, testimonials, etc), available price packages with FAQs, and a contact inquiry form for those interested.",
    githubLink: {
      href: "https://github.com/jeddelich/AliciaJoyDesign",
      text: "View Code",
    },
    vercelLink: {
      href: "https://aliciajoydesign.studio/",
      text: "View Website",
    },
  },
  {
    img: {
      src: "/projects/skinstric.ai-ss.png",
      alt: "Skinstric.ai",
    },
    title: "Skinstric",
    subtitle: ["Next.js", "React", "TypeScript", "JavaScript", "CSS3", "HTML5", "Figma", "Git Environment", "Node.js"],
    description:
      "As part of an internship role in March 2026, I shipped 5 responsive pages for a real-time AI skin analysis platform, built 10+ reusable components for scaling, engineered a multi-step form with user feedback states, and file upload and camera capture functionality enabling their pipeline.",
    githubLink: {
      href: "https://github.com/jeddelich/skinstric.ai",
      text: "View Code",
    },
    vercelLink: {
      href: "https://skinstric.ai/",
      text: "View Website",
    },
  },
  {
    img: {
      src: "/projects/netflix-clone-ss.png",
      alt: "Netflix Clone",
    },
    title: "Netflix Clone",
    subtitle: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript", "Firebase", "Zustand", "Stripe", "Material UI"],
    description: "This fully responsive clone of the popular streaming service, Netflix, was built entirely with Next.js, TypeScript, and Tailwind CSS, featuring dynamic API data, user authentication with Firebase, and Stripe integration for subscription management. With custom hooks, contexts, utils, and 15+ resuable components, this project demonstrates my ability to create a complex and feature-rich application with a sleek and modern design. Feel free to check it out using the Stripe test card number 4242 4242 4242 4242, any future expiration date, and any CVC.",
    githubLink: {
      href: "https://github.com/jeddelich/netflix-clone",
      text: "View Code",
    },
    vercelLink: {
      href: "https://netflix.jeddelich.com/login",
      text: "View Website",
    },
  },
  {
    img: {
      src: "/projects/summarist-ss.png",
      alt: "Summarist",
    }, 
    title: "Summarist",
    subtitle: ["Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
    description:
      "Summarist is a subscription website featuring authentication with Firebase, Stripe integration, a search bar, and audio player. With a sleek and intuitive interface, Summarist allows users to scroll through the carousels of dynamic API book data and listen to audio summaries (premium ones if you have the monthly or annual plan). The application is built using Next.js and TypeScript, ensuring a seamless user experience and robust performance. Feel free to create a free account or use the guest login to check it out. (Stripe test card number: 4242 4242 4242 4242, any future expiration date, and any CVC)",
    githubLink: {
      href: "https://github.com/jeddelich/summarist",
      text: "View Code",
    },
    vercelLink: {
      href: "https://summarist.jeddelich.com/",
      text: "View Website",
    },

  },
  {
    img: {
      src: "/projects/nft-marketplace-ss.png",
      alt: "NFT Marketplace",
    },
    title: "NFT Marketplace",
    subtitle: ["React", "JavaScript", "HTML", "CSS"],
    description:
      "Working on 8+ branches, my pull requests feature api integration, dynamic routes and data, and a sleek design. This project demonstrates my ability to create a responsive and user-friendly interface with carousels, countdown timers, and skeleton loading states. The marketplace allows users to not only checkout individual profiles and NFTs, but explore with a sort function, providing a seamless browsing experience. (This was a fork utilizing some basic HTML and CSS starter code provided by hannamitri on GitHub)",
    githubLink: {
      href: "https://github.com/jeddelich/jed-nft-marketplace",
      text: "View Code",
    },
    vercelLink: {
      href: "https://nft.jeddelich.com/",
      text: "View Website",
    },
  },
  {
    img: {
      src: "/projects/treact-react-website-ss.png",
      alt: "Treact Website",
    },
    title: "Treact Website",
    subtitle: ["React", "JavaScript", "HTML", "CSS"],
    description:
      "I originally created Treact as a static single-page website using vanilla JavaScript to showcase the flexbox layouts and responsiveness. I later rebuilt it with React and fully componentized it as an exercise to make it more maintainable and reusable. The project features a clean and modern design, with smooth animations and transitions. Feel free to check it out!",
    githubLink: {
      href: "https://github.com/jeddelich/treact-website-react",
      text: "View Code",
    },
    vercelLink: {
      href: "https://treact.jeddelich.com/",
      text: "View Website",
    },
  }
];

export default projects;
