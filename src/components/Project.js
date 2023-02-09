import React from "react";

function Project(props) {
    console.log
  const {
    id,
    img,
    title,
    description,
    skills,
    preview,
    github } = props;

  return (
      <div className="project-card">
        <img className="project-img" src={img} alt={title} />
        <button type="button">Preview</button>
        <button type="button">GitHub</button>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{skills}</p>
      </div>
  );
}

export default Project;
