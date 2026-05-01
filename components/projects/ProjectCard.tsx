"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import styles from "./ProjectCard.module.css";

function ProjectCard({
  project,
  priority = false,
  reverse = false,
}: {
  project: Project;
  priority?: boolean;
  reverse?: boolean;
}) {
  const hasImage = Boolean(project.img?.src);
  const hasSubtitle = Boolean(project.subtitle?.length);
  const hasGithubLink = Boolean(project.githubLink?.href && project.githubLink.text);
  const hasVercelLink = Boolean(project.vercelLink?.href && project.vercelLink.text);

  return (
    <motion.li
      className={styles.project}
      initial={{opacity: 0.5}}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
    >
      <div
        className={`${styles.project__wrapper} ${reverse ? styles.project__wrapperReverse : ""} ${!hasImage ? styles.project__wrapperNoMedia : ""}`}
      >
        {hasImage && project.img && (
          <div className={styles.project__media}>
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
          </div>
        )}
        <div className={styles.project__description}>
          <div className={styles.project__descriptionHeader}>
            <h3 className={styles.project__descriptionTitle}>{project.title}</h3>
            {hasSubtitle && project.subtitle && (
              <ul className={styles.project__descriptionSubtitleList} aria-label={`${project.title} tech stack`}>
                {project.subtitle.map((tool) => (
                  <li key={tool} className={styles.project__descriptionSubtitle}>
                    {tool}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <p className={styles.project__descriptionPara}>{project.description}</p>
          {(hasGithubLink || hasVercelLink) && (
            <div className={styles.project__descriptionLinks}>
              {hasGithubLink && project.githubLink && (
                <a
                  href={project.githubLink.href}
                  className={styles.workLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.githubLink.text}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              )}
              {hasVercelLink && project.vercelLink && (
                <a
                  href={project.vercelLink.href}
                  className={styles.workLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.vercelLink.text}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.li>
  );
}

export default ProjectCard;
