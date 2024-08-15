import React,{useState} from 'react'

import './Home.css'
import "./Resume.css";
import home from '../assets/home.png'

import './About.css'
// import aboutPic from "../assets/aboutPic.jpeg";
import about from "../assets/about.png";
import './Skiils.css'
import Card from '../components/Card'
import web from '../assets/web.png'
import DSA from '../assets/DSA.png'
import blog from '../assets/blog.png'
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";
import trip from "../assets/trip.jpg";
import gym from "../assets/gym.jpg";
import portfolio from "../assets/portfolio.jpg";
import github from "../assets/github.jpg";
import bubble from "../assets/bubble.jpg";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import Typewriter from 'typewriter-effect';

import Carousel from "react-simply-carousel";
import { loadSlim } from "tsparticles-slim";
import html5 from '../assets/html5.png';
import css3 from '../assets/css3.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import sass from '../assets/sass.png';
import nodeJS from '../assets/nodeJS.png';
import java from '../assets/java.png';
import mongodb from '../assets/mongodb.png';
import express from '../assets/express.png';
import { Link } from 'react-router-dom';




function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const imageArray=[html5,css3,javascript,react,sass,mongodb,nodeJS,express,java];
 
  const iconsArray=[
    {name:"HTML"},
    { name:"CSS"},
    { name:"Javascript"},
    { name:"React"},
    { name:"SASS"},
    { name:"MongoDB"},
    { name:"NodeJs"},
    { name:"ExpressJs"},
    { name:"Java"},
    
  ]
  

  const particlesInit = useCallback(async engine => {
    console.log(engine);
   
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <>
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    <div className='home' id="home">
  
    
   
    <div className='wrapper'>
    <div className='info'>
      <h3>
        Hello,I'm
      </h3>
      <h1> Bharti Sahani</h1>
     
      <h2 style={{color:'#F47B21',fontSize:"2.5rem"}}>  <Typewriter
   
   options={{
     strings: ['Software Engineer','Web Developer', 'Competitive Coder'],
     autoStart: true,
     loop: true,
   }}
 />
 </h2>
   
      </div>
      <div className='icons'>
     <div className='icons-child' >
      <a href="https://www.linkedin.com/in/bharti-sahani-25a250188/" target="_blank" rel="noopener noreferrer">  <i class="fa-brands fa-linkedin" ></i></a>
    <a href="https://github.com/bharti147" target="_blank" rel="noopener noreferrer">  <i class="fa-brands fa-github"></i></a>
    <a href="https://www.instagram.com/sahanibharti71/" target="_blank" rel="noopener noreferrer">  <i class="fa-brands fa-instagram"></i></a>
    <a href="" target="_blank" rel="noopener noreferrer">  <i class="fa-brands fa-telegram"></i></a>
    </div>
   
    
   
      
      </div>
      
      <button className='hire'><Link style={{textDecoration:"none",color:"white",backgroundColor:"rgb(244,119,20)"}}to="/contact">Hire Me</Link></button>
      </div>
     
      
     
     
    </div>
    <div className="about" id="about">
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
            <span>Current Address: </span> Haryana,India
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
   
    <div className='skills' id="skills">
    
    <h1>My Skills</h1>
    <div className='cardHolder'>
    <Carousel
        containerProps={{
          className:"mainBox",
          style: {
            width: "90%",
          
  justifyContent: "space-around",
  alignItems: "center",
            // justifyContent: "space-between",
            userSelect: "none",
            padding:"0 2rem"
        
          }
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        autoplay={true}
        infinite={true}
        speed={1000}
        delay={100}
        easing="linear"
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: "black"
          }
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          className:"arrows",
          style:{
            fontSize:"2rem",
            backgroundColor:"black",
            color:"white",

            // borderRadius:"50%"
          }
        
        
        }}
        backwardBtnProps={{
          children: "<",
          className:"arrows",
          style:{
            fontSize:"2rem",
            backgroundColor:"black",
            color:"white",
            // borderRadius:"50%"
          }
         
        }}
        dotsNav={{
          show: false,
          itemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0
            }
          },
          activeItemBtnProps: {
            
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "black"
            }
          }
        }}
        itemsToShow={2}
        itemsToScroll={1}
        centerMode
      >
        {iconsArray.map((item, index) => (
          <div className='car'
            style={{
              background: "black",
              width: 500,
              height: 400,
              // border: "1px solid white",
              textAlign: "center",
              lineHeight: "150px",
              boxSizing: "border-box",
              
          
              
            }}
            key={index}
          >
          <img className='imgcar' src={imageArray[index]}  alt={item.name} />
          
            <h1>{item.name}</h1>
          </div>
        ))}
      </Carousel>
    {/* <Card imgUrl={web} title={"Web Development"} details={"Front-end Development using HTML, CSS, js, React & skilled in deploying Back-end."} url={"https://github.com/bharti147"}/>

    <Card imgUrl={DSA} title={"Data Structure & Algorithms"} details={"Preparation for technical interviews"} url={"https://leetcode.com/bharti147/"}/>
    <Card imgUrl={blog} title={"Blog Writing"} details={"Explore the latest trends in technology and write variety of articles on Medium"} /> */}
    </div>
    </div>

    {/* <div className="resume" >
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
                  Had experience in Ui/Ux and front-end development,
                  specialising in the design and development of microsites,
                  landing pages and different web applications.
                </li>
              </ul>
            </>
          </div>
          <div className="sec">
            <h2>Skills</h2>
            <br/>
            <>
              <ul>
                <li><span>Technical Skills: </span>Front-end Development.</li>
                <li><span>Programming Languages: </span> Java, JavaScript.</li>
                <li><span>Frameworks: </span> ReactJS, Bootstrap, NodeJS.</li>
                <li><span>Database: </span> MongoDB, MySQL.</li>
                <li><span>Cloud Platforms: </span> GitHub, Netlify</li>
                <li><span>Languages: </span> English, Hindi.</li>
              </ul>
            </>
          </div>
        </div>
      </div>
    </div> */}

    <div className="projects" id="projects">
      <h1>Recent Works</h1>
      <hr
        style={{ width: "20%", margin: " 0 auto", color: "rgb(255, 255, 255)" }}
      />
      <div className="projectBox">
      <ProjectCard bg1= {"https://images.pexels.com/photos/3296547/pexels-photo-3296547.jpeg?auto=compress&cs=tinysrgb&w=600"} name={"Blog"} title ={"Fullstack app for posting blogs & pictures"} gitURL={"https://github.com/bharti147/Blog"}     url={"https://github.com/bharti147/Blog"} />

        <ProjectCard  bg1={"https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg?auto=compress&cs=tinysrgb&w=600"} name={"PeakShape Gym"} title={"Gym Website using React,Sass & Rapid API"}  gitURL={"https://github.com/bharti147/peakshape"}     url={"https://peakshapegym.netlify.app/"} />

        <ProjectCard  bg1={"https://images.pexels.com/photos/3521937/pexels-photo-3521937.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} name={"Portfolio"} title={"Website using React & CSS"}     gitURL={"https://github.com/bharti147/portfolio"}     url={"https://portfoliobharti.netlify.app/"} />
        <ProjectCard bg1={"https://images.unsplash.com/photo-1633791583517-c828e6f851a9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}  name={"Github ReadMe"} title={"My Profile ReadMe"} gitURL={"https://github.com/bharti147"}    url={"https://github.com/bharti147"} />
      </div>
    </div>
     </>
  )
}

export default Home
