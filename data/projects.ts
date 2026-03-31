import { Project } from "@/types/project";

const projects: Project[] = [
  {
    img: {
      src: "/treact-react-website-ss.png",
      alt: "Treact Website",
    },
    title: "Treact Website",
    subtitle: "React, JavaScript, HTML, CSS",
    description:
      "I originally created Treact as a static single-page website using vanilla JavaScript to showcase the flexbox layouts and responsiveness. I later rebuilt it with React and fully componentized it as an exercise to make it more maintainable and reusable. The project features a clean and modern design, with smooth animations and transitions. Feel free to check it out!",
    githubLink: {
      href: "https://github.com/jeddelich/treact-website",
      text: "GitHub Repo",
    },
    vercelLink: {
      href: "https://treact-website-react-jed-delichs-projects.vercel.app/",
      text: "Live Demo",
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
      text: "GitHub Repo",
    },
    vercelLink: {
      href: "https://jeddelich.github.io/e-commerce/",
      text: "Live Demo",
    },
  },
];

export default projects;
