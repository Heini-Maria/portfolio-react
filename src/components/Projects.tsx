import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";
import { Variants } from "./types";

interface ProjectsProps {
  variants: Variants;
}

function Projects(props: ProjectsProps) {
  const { variants } = props;
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ type: "ease", duration: 0.6 }}
    >
      <section className="projects main" id="projects">
        <h2>Projects</h2>
        <Project />
      </section>
    </motion.div>
  );
}

export default Projects;
