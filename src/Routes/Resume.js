import React from "react";
import NavBar from "../components/NavBar";
import "./Resume.css";
function Resume() {
  return (
    <div className="resume" id="resume">
      <h1>RESUME</h1>
     
      <div className="container">
      
        <div class="column">
          <div className="sec">
            <h2>Summary</h2>
            <br/>

            <h4>BHARTI SAHANI</h4>
            <br/>
            <p>
              A computer science engineering graduate skilled in data structure and
              algorithms, front-end development, Ui/Ux design and continuously
              expanding knowledge through learning new technologies.
            </p>
            <br/>
            <ul>
              <li><span>Hometown:</span> Hisar, Haryana</li>
              <li><span>Email:</span> bhartisahani406@gmail.com</li>
            </ul>
          </div>
          <div className="sec">
            <h2>Education</h2>
            <br/>
            <>
              <h4>BACHELOR OF ENGINEERING (B.E.)</h4>
             
              <ul>
                <li>August 2019 - June 2023</li>
                <li>Chitkara University, Punjab, India</li>
                <li>CGPA: 9.52/10.00 [Computer Science Engineering]</li>
              </ul>
          
            </>
            <br/>
            <>
              <h4>HIGHER SECONDARY SCHOOL</h4>
            
              <ul>
                <li>April 2015 - March 2016</li>
                <li>New Lahoria Sr. Sec. School, Hisar, Haryana</li>
                <li>CGPA: 10.00/10.00</li>
              </ul>
            </>
            <>
            <br/>
              <h4>SENIOR SECONDARY SCHOOL</h4>
             
              <ul>
              <li>April 2017 - March 2018</li>
                <li>New Lahoria Sr. Sec. School, Hisar, Haryana</li>
                <li>CGPA: 9.3/10.00 [Non- Medical]</li>
              </ul>
             
            </>
          </div>
        </div>
        <div class="column">
          <div className="sec">
            <h2>Experience</h2>
            <br/>

            <h4>TATA COMMUNICATIONS TRANSFORMATION SERVICES</h4>
            <br/>
            <>
              <ul>
                <li>October 2022 - June 2023</li>
                <li>Pune, India</li>
                <li>Web Developer Intern</li>
                <li>
                • Collaborated with cross-functional teams on two major projects, leveraging ReactJS to
design and implement user interfaces.
<br/>
• Successfully integrated backend APIs to ensure seamless data exchange and functionality.
<br/>
• Played a key role in crafting user-friendly interfaces, elevating the overall user experience
for project success.
                </li>
              </ul>
            </>
          </div>
          <div className="sec">
            <h2>Skills</h2>
            <br/>
            <>
              <ul>
                <li><span>Technical Skills: </span>Web Development.</li>
                <li><span>Programming Languages: </span> JavaScript, SQL, PHP, Java</li>
                <li><span>Front-End Frameworks/Libraries:: </span> ReactJS,  Redux, Redux Toolkit Bootstrap, </li>
                <li><span>Back-End Frameworks/Libraries:: </span> ExpressJS, Node.js
                </li>
                <li><span>Database: </span> MongoDB, MySQL.</li>
                <li><span>Developer tools: </span> Git, Netlify, Vercel, VS Code</li>
                <li><span>Languages: </span> English, Hindi.</li>
              </ul>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
