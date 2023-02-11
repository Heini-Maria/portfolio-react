import React from "react";
import { projects } from "./ProjectsData";
import Project from "./Project";

function Projects() {
  return (
    <section className="projects main" id="projects">
      <h2>Projects</h2>
      <Project projects={projects} />
    </section>
  );
}

export default Projects;
