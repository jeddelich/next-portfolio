"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import projects from "@/data/projects";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { useState } from "react";
import styles from "./Projects.module.css";

function Projects() {
  const [projectsDisplayed, setProjectsDisplayed] = useState<number>(2);

  return (
    <section id="clients" className={styles.projects}>
      <div className="container">
        <div className="row">
          <SectionHeader
            eyebrow="03 — Past Clients"
            title="Some Things I've Built."
          />
          <ul className={styles.project__list}>
            {projects.slice(0, projectsDisplayed).map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                priority={index === 0}
                reverse={index % 2 === 1}
              />
            ))}
          </ul>
          {projectsDisplayed < projects.length && (
            <Button
              text={`Explore More`}
              onClick={() => setProjectsDisplayed(projectsDisplayed + 2)}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
