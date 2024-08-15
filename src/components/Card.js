import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
   
      <div className='card'>
    <div className='card-img'>
      <img src={props.imgUrl}></img>
      </div>
<div className='card-info'>
  <Link to={props.url} target='_blank' style={{textDecoration:"none"}}><h2>{props.title}</h2></Link>
 
  <p>{props.details}</p>

</div>

    </div>
  
  )
}

export default Card
