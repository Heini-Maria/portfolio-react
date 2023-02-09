import React from "react";
import project1 from "../../assets/images/repeat.color.png";
import project2 from "../../assets/images/react-reddit.png";
import project3 from "../../assets/images/js-calculator.png";
import project4 from "../../assets/images/responsive-website.png";
import project5 from "../../assets/images/static-website.png";
import arrowR from "../../assets/images/button-prev.png";
import arrowL from "../../assets/images/button-nxt.png";
import { projects } from "../components/ProjectsData"; 
import Project from "./Project";

function Projects() {
  console.log(projects);

  return (
    <section className="projects main" id="projects">
      <h2>Projects</h2>
      <p>Here are some examples of projects I've done so far:</p>
      <div className="project-display">
        {projects.map((project) => (
          <Project key={project.id} id={project.id} img={project.img} title={project.title} description={project.description} skills={project.skills} preview={project.preview} github={project.github} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
