import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <h1>
        Bharti Sahani
      </h1>
      <h3>Feel free to reach me out on any of these platforms</h3>
      <hr style={{width:"70%", margin:"0 auto" ,color:"rgb(137, 137, 138)"}}/> 
      <div className='footer-icons'> 
      <ul>
    <li><a href="https://www.linkedin.com/in/bharti-sahani-25a250188/" target="_blank" rel="noopener noreferrer">  <i class="fa-brands fa-linkedin"></i></a></li>
    <li><a href="https://github.com/bharti147" target="_blank" rel="noopener noreferrer">  <i class="fa-brands fa-github"></i></a></li>
    <li><a href="https://www.instagram.com/sahanibharti71/" target="_blank" rel="noopener noreferrer">  <i class="fa-brands fa-instagram"></i></a></li>
    <li><a href="" target="_blank" rel="noopener noreferrer">  <i class="fa-brands fa-telegram"></i></a></li>
     </ul>
    

      </div>
      <hr style={{width:"70%", margin:"0 auto", color:"rgb(137, 137, 138)"}}/>
      <p>MyPortfolio © 2023 | by React</p>
    </div>
  )
}

export default Footer
