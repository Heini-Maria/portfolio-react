import React from "react";

function Modal({ project, toggleModal }) {
  return (
    <div>
      <div className="modal">
        <div className="modal-header">
          <button className="action-button" onClick={() => toggleModal()}> X </button>
        </div>
        <img className="modal-img" src={project.img} alt={project.title} />
        <div>
          <button type="button">
            <a href={project.preview} target="_blank" rel="noreferrer" title="link to the project">
              Preview
            </a>
          </button>
          <button type="button">
            <a href={project.github} target="_blank" rel="noreferrer" title="link for GitHub repository">
              GitHub
            </a>
          </button>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
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
      </div>
    </div>
  );
}

export default Modal;
