// import React, { Component } from 'react'
// import './NavBar.css'
// import './MenuItems'
// import { MenuItems } from './MenuItems'
// import { NavLink } from 'react-router-dom'

// export class NavBar extends Component {
//   render() {
//     state={isClicked:false}
//     handleClick = ()=>{
//       this.setState({isClicked:true})
//     }
//     return (
//       <nav className='NavbarItems'>
//       <div className='hamburger-menu'>
//         <i className={this.state.isClicked? `fa-solid fa-bars`:`fa-solid fa-xmark`}/>
//       </div>
//         <ul className='nav-menu'>
//         {MenuItems.map((item, index)=>{
//             return(
//                 <li key={index} className='box'>
                
//                     <NavLink to={item.url} className={item.cName}  >
//                     <i className={item.icon}></i>
                    
//                     {item.title}
                  
//                     </NavLink>
                   
//                 </li>
//             )
//         })}
            
//         </ul>
//       </nav>
//     )
//   }
// }

// export default NavBar
 import React, {  useState } from 'react'
 import './NavBar.css'
 import './MenuItems'
 import { MenuItems } from './MenuItems'
 import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.development'
function NavBar() {
  const [isClicked,setIsclicked] = useState(true);

  const handleClick = () =>{
    setIsclicked(!isClicked);
  }
  return (
    <nav className='NavbarItems'>
       <div className='hamburger-menu' onClick={handleClick}>
         <i className={isClicked? `fa-solid fa-bars`:`fa-solid fa-xmark`}/>
         {/* <i className='fa-solid fa-bars'/> */}
       </div>
         <ul className={isClicked?'nav-menu':'nav-menu active'}>
         {MenuItems.map((item, index)=>{
             return(
                 <li key={index} className='box' style={{textAlign:"center"}}>              
                     <HashLink to={item.url} className={item.cName} >
                     <i className={item.icon}></i>                  
                     {item.title}                
                     </HashLink>                 
                 </li>
             )
         })} 
                  
         </ul>
       </nav>
  )
}

export default NavBar
