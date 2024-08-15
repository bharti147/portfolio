import './App.css';
import NavBar from './components/NavBar';
import Home from './Routes/Home';
import About from './Routes/About';
import Skills from './Routes/Skills';
import Resume from './Routes/Resume';
import Projects from './Routes/Projects';
import Contact from './Routes/Contact';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Footer from './components/Footer';
import './App.css'

import { useCallback } from "react";
import Particles from "react-tsparticles";

import { loadSlim } from "tsparticles-slim";




function App() {
//   const particlesInit = useCallback(async engine => {
//     console.log(engine);
   
//     await loadSlim(engine);
// }, []);

// const particlesLoaded = useCallback(async container => {
//     await console.log(container);
// }, []);
  return (
    <div className="App">
    {/* <Particles
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
        /> */}
          
      
    <Router>
    <NavBar/>
  
   <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/about" element = {<About/>}/>
    <Route path="/skills" element = {<Skills/>}/>
    <Route path="/resume" element = {<Resume/>}/>
    <Route path="/projects" element = {<Projects/>}/>
    <Route path="/contact" element = {<Contact/>}/>
    

   </Routes>
   <Footer/>
   </Router>

    
    </div>
  );
}

export default App;
