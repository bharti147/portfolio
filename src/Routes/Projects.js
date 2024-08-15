import React from "react";
import NavBar from "../components/NavBar";
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";
import trip from "../assets/trip.jpg";
import gym from "../assets/gym.jpg";
import portfolio from "../assets/portfolio.jpg";
import github from "../assets/github.jpg";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Recent Works</h1>
      <hr
        style={{ width: "20%", margin: " 0 auto", color: "rgb(255, 255, 255)" }}
      />
      <div className="projectBox">
        <ProjectCard title={"Blog"}    gitURL={"https://github.com/bharti147/Blog"} linkURL={""}  />
        <ProjectCard title={"Fitness Zone"}    gitURL={""} linkURL={""}url={gym} />
        <ProjectCard title={"Portfolio"}       gitURL={"https://github.com/bharti147/portfolio"} linkURL={""}url={portfolio} onClick={()=>{
          console.log('clicked')
        }} />
        <ProjectCard title={"Github ReadMe"}   gitURL={""} linkURL={""}url={github} />
      </div>
    </div>
  );
}

export default Projects;
