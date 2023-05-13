import React from "react";
import { motion } from "framer-motion";
import { projects } from "./ProjectsData";
import Project from "./Project";

function Projects({ variants }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ type: "ease", duration: 0.6 }}
    >
      <section className="projects main" id="projects">
        <h2>Projects</h2>
        <Project projects={projects} />
      </section>
    </motion.div>
  );
}

export default Projects;
