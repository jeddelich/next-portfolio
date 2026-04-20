import Image from "next/image";
import { Project } from "@/types/project";
import styles from "./ProjectCard.module.css";

function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <li className={styles.project}>
      <div className={styles.project__wrapper}>
        <Image
          src={project.img.src}
          alt={project.img.alt}
          className={styles.project__img}
          width={900}
          height={480}
          sizes="(max-width: 480px) 95vw, (max-width: 768px) 92vw, 800px"
          priority={priority}
          fetchPriority={priority ? "high" : "auto"}
          loading={priority ? "eager" : "lazy"}
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
              <svg aria-hidden="true" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.63 7.63 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
              {project.githubLink.text}
            </a>
            <a
              href={project.vercelLink.href}
              className={styles.project__descriptionLink}
              target="_blank"
            >
              <svg aria-hidden="true" viewBox="0 0 576 512" width="1em" height="1em" fill="currentColor">
                <path d="M384 192H96c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zm-32-96h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c123.7 0 224 100.3 224 224v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-88.4-71.6-160-160-160z" />
              </svg>
              {project.vercelLink.text}
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;
