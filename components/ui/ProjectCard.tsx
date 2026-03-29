import Image from "next/image";
import { Project } from "@/types/project";

function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="project">
      <div className="project__wrapper">
        <Image
          src={project.img.src}
          alt={project.img.alt}
          className="project__img"
          width={900}
          height={480}
        />
        <div className="project__wrapper--bg"></div>
        <div className="project__description">
          <h3 className="project__description--title">{project.title}</h3>
          <h4 className="project__description--subtitle">{project.subtitle}</h4>
          <p className="project__description--para">{project.description}</p>
          <div className="project__description--links">
            <a
              href={project.githubLink.href}
              className="project__description--link"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href={project.vercelLink.href}
              className="project__description--link"
              target="_blank"
            >
              <i className="fa-solid fa-link"></i>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;
