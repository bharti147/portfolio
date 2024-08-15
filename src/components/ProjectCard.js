import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  // bg1 bg2
  return (
    <div style={{backgroundImage: `url(${props.bg1})`}} className="projectCard">
      <h2 className="projectName">{props.name}</h2>

      <div class="projectCard-content">
        <h2 class="title">{props.title}</h2>
        <div className="projectIcons">
          <h3>
            <a
              style={{ color: "white" }}
              href={props.gitURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i class="fa-brands fa-github"></i>
            </a>
          </h3>
          <h3>
            <a
              style={{ color: "white" }}
              href={props.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i class="fa-solid fa-link"></i>
            </a>
          </h3>
          {/* <i class="fa-solid fa-link"></i> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
