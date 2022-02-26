import React from 'react'
import logo from "../Assets/download.jpg";
import Button from './Button';
function Navbar() {
    return (
        <div>
             <header> 
              <nav>
            <div className = 'logo'> 
            <div> 
            <img src = {logo} alt = 'logo' />
            </div>
              <span> Textify AI </span>
            </div>
            
   <div className = 'Nav_links' >
   <ul>
  <li> SOLUTIONS </li>
  <li> CUSTOMERS </li>
  <li> FEATURES </li>
  <li> PRICING </li>
  <li> RESOURCES </li>
 <li>  <Button> Log in  </Button> </li>
        </ul>
   </div>
     
             </nav>      
             </header>
        </div>
    )
}

export default Navbar
