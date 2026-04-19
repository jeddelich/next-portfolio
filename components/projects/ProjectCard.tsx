import Image from "next/image";
import { Project } from "@/types/project";
import styles from "./ProjectCard.module.css";

function ProjectCard({ project }: { project: Project }) {
  return (
    <li className={styles.project}>
      <div className={styles.project__wrapper}>
        <Image
          src={project.img.src}
          alt={project.img.alt}
          className={styles.project__img}
          width={900}
          height={480}
        />
        <div className={styles.project__wrapperBg}></div>
        <div className={styles.project__description}>
          <h3 className={styles.project__descriptionTitle}>{project.title}</h3>
          <h4 className={styles.project__descriptionSubtitle}>{project.subtitle}</h4>
          <p className={styles.project__descriptionPara}>{project.description}</p>
          <div className={styles.project__descriptionLinks}>
            <a
              href={project.githubLink.href}
              className={styles.project__descriptionLink}
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
              {project.githubLink.text}
            </a>
            <a
              href={project.vercelLink.href}
              className={styles.project__descriptionLink}
              target="_blank"
            >
              <i className="fa-solid fa-link"></i>
              {project.vercelLink.text}
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;
