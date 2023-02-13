import React from "react";
import { useState } from "react";
import Modal from "./Modal";

function Project({ projects }) {
  const [showModal, setShowModal] = useState(false);
  const [isActive, setIsActive] = useState(0);

  const handleClick = (index) => {
    setIsActive(index);
    const element = document.getElementById("active");

    element.classList.remove("isActive");
    void element.offsetWidth;
    element.classList.add("isActive");
  };

  return (
    <div className="project-display">
      <div className="isActive" id="active">
        <img className="project-img" src={projects[isActive].img} alt={projects[isActive].title} />
        <div>
          <button type="button">
            <a href={projects[isActive].preview} target="_blank" rel="noreferrer" title="link to the project">
              Preview
            </a>
          </button>
          <button type="button">
            <a href={projects[isActive].github} target="_blank" rel="noreferrer" title="link for GitHub repository">
              GitHub
            </a>
          </button>
        </div>
        <h3>{projects[isActive].title}</h3>
        <p>{projects[isActive].description}</p>
        <ul>
          {
          projects[isActive].skills.map((skill) => (
            <li>
              #
              {skill}
            </li>
          ))
          }
        </ul>
      </div>
      <div>
        {projects.map((project, index) => (
          <div className={index === isActive? "selected project-card" : "project-card"} onClick={() => handleClick(index)}>
            <section className="project-hero">
              <img className="project-img" src={project.img} alt={project.title} />
            </section>
            <section>
              <h3>{project.title}</h3>
              <ul>
                {
                project.skills.map((skill) => (
                  <li>
                    #
                    {skill}
                  </li>
                ))
               }
              </ul>
              <button className="modal-button" type="button" onClick={() => setShowModal(true)}>+</button>
              {showModal ? (
                <Modal />
              ) : null}
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
