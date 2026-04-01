import ProjectCard from "@/components/ui/ProjectCard";
import projects from "@/data/projects";
import Button from "@/components/ui/Button";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            Here are some of my <span className="orange">projects</span>
          </h1>
          <ul className="project__list">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </ul>
          <Button text={`explore all ${projects.length} projects`} />
        </div>
      </div>
    </section>
  );
}

export default Projects;
