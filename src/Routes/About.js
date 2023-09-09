import React from "react";
import NavBar from "../components/NavBar";
import "./About.css";
import about from "../assets/about.png"

function About() {
  return (
    <div className="about">
      {/* <NavBar/> */}
      <div className="about-img">
        <img src={about} alt="profilePic"></img>
      </div>
      <div className="about-info">
        <h1>About Me</h1>
        <br />
       
        <h2> Hey there!</h2>
        <br/>
        <p>
          I graduated from Chitkara University with a B.E. degree in Computer
          Science Engineering. During my time at Chitkara, I pursued my
          undergraduate studies and developed a strong skillset in various areas
          such as data structure & algorithms, front-end development, Ui/Ux
          design. I also have a passion for reading and travelling. With a
          diverse set of technical and creative skills, I'm eager to apply my
          knowledge to tackle new challenges and make meaningful contributions.
        </p>
<div className="about-container">
        <div class="container-child">
        <ul>
          <li>
            <span>Email: </span> bhartisahani406@gmail.com
          </li>

          <li>
            <span>BirthDate: </span> 14 July,2000
          </li>

          <li>
            <span>Cuurent Address: </span> Haryana,India
          </li>

          <li>
            <span>Hometown: </span>Hisar,Haryana
          </li>
          </ul>
        </div>
        <div class="container-child">
        <ul>
          <li>
            <span>Phone: </span>+91-90********
          </li>
          <li>
            <span>Major: </span>Computer Science Engineering
          </li>
          <li>
            <span>Degree: </span>Bachelor of Engineering (B.E.)
          </li>
          <li>
            <span>University: </span>Chitkara University
          </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
