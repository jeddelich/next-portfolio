import { Project } from "@/types/project";

const projects: Project[] = [
  {
    img: {
      src: "/treact website.png",
      alt: "Treact Website",
    },
    title: "Treact Website",
    subtitle: "Used HTML and CSS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi obcaecati amet, tenetur omnis rem quasi ea nam a eaque consequuntur.",
    githubLink: {
      href: "https://github.com/jeddelich/treact-website",
    },
    vercelLink: {
      href: "https://jeddelich.github.io/treact-website/",
    },
  },
  {
    img: {
      src: "/library website.png",
      alt: "Library Website",
    },
    title: "Library Website",
    subtitle: "Used HTML and CSS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi obcaecati amet, tenetur omnis rem quasi ea nam a eaque consequuntur.",
    githubLink: {
      href: "https://github.com/jeddelich/e-commerce",
    },
    vercelLink: {
      href: "https://jeddelich.github.io/e-commerce/",
    },
  },
];

export default projects;
