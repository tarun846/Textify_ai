import React from 'react'
import Bg from "../Assets/background.webp";
import Button from '../components/Button';
import Monkey from '../Assets/monkeylearn-studio.webp' 
import Company from '../Assets/download (1).svg' 
import Img from '../components/Img';
function Home() {
    return (
        <>
        <div className = 'hero' style = {{ backgroundImage : `url(${Bg})`  }}  >
         <div className = 'hero_content' > 
         <div className = 'hero_Para' >
         <h2> No-Code Text Analytics </h2>
           <h3> 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rem sapiente <br/>  necessitatibus repellat quas repudiandae.
</h3>
         </div>
           <div className = 'hero_btn' >
           <Button Color = 'green' > Learn more  </Button>
        <Button Color = 'green' > Signup  </Button>
           </div>
          
   <div className = 'sahi' >
   <img src = {Monkey} className = 'banner_img' />

   </div>
         
        </div> 
        </div>
    
      <div className = 'works' >
 <h1> Powering the world's most data driven companies  </h1>
   <div className = 'works_img' >
   <Img prop = {Company } />
   <Img prop = {Company } />
   <Img prop = {Company } />
   <Img prop = {Company } />

   </div>
      </div>

</>
    )
}

export default Home
