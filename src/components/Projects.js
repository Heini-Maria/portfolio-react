import React from "react";
import { projects } from "./ProjectsData";
import Project from "./Project";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ width: "50%" }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <section className="projects main" id="projects">
        <h2>Projects</h2>
        <Project projects={projects} />
      </section>
    </motion.div>
  );
}

export default Projects;
