"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import projects from "@/data/projects";
import Button from "@/components/ui/Button";
import { useState } from "react";

function Projects() {

    const [projectsDisplayed, setProjectsDisplayed] = useState<number>(2);

  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            Here are some of my <span className="orange">projects</span>
          </h1>
          <ul className="project__list">
            {projects.slice(0, projectsDisplayed).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </ul>
          {projectsDisplayed < projects.length && (
            <Button text={`Explore More`} onClick={() => setProjectsDisplayed(projectsDisplayed + 2)} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
