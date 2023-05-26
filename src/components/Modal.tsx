import React from "react";
import { MdClose } from "react-icons/md";
import { Project, toggleModalFunction } from "./types";

interface ModalProps {
  project: Project,
  toggleModal: toggleModalFunction,
}

function Modal(props: ModalProps) {
  const { project, toggleModal } = props;
  return (
    <div>
      <div className="modal">
        <div className="modal-header">
          <button
            type="button"
            className="modal-button"
            onClick={() => toggleModal()}
          >
            <MdClose className="close-icon" />
          </button>
        </div>
        <img className="modal-img" src={project.img} alt={project.title} />
        <div className="modal-buttons">
          <button type="button">
            <a
              href={project.preview}
              target="_blank"
              rel="noreferrer"
              title="link to the project"
            >
              Preview
            </a>
          </button>
          <button type="button">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              title="link for GitHub repository"
            >
              GitHub
            </a>
          </button>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul>
          {project.skills.map((skill: string) => (
            <li>
              #
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Modal;
