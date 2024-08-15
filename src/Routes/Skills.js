import React from 'react'
import NavBar from '../components/NavBar'
import './Skiils.css'
import Card from '../components/Card'
import web from '../assets/web.png'
import DSA from '../assets/DSA.png'
import blog from '../assets/blog.png'

function Skills() {
  return (
    <div className='skills' id="skills">
    
    <h1>My Skills</h1>
    <div className='cardHolder'>
    <Card imgUrl={web} title={"Web Development"} details={"Front-end Development using HTML, CSS, js, React & skilled in deploying Back-end."} url={"https://github.com/bharti147"}/>
    {/* imgUrl={} title={} details={} */}
    <Card imgUrl={DSA} title={"Data Structure & Algorithms"} details={"Preparation for technical interviews"} url={"https://leetcode.com/bharti147/"}/>
    <Card imgUrl={blog} title={"Blog Writing"} details={"Explore the latest trends in technology and write variety of articles on Medium"} />
    </div>
    </div>
  )
}

export default Skills
