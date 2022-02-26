import React from 'react'
import greentick from "../Assets/green-tick-icon-19.jpg";
function Content({data}) {
   console.log(data);
      const Data = data.map((e) => {
          console.log(e);
          return <div className = 'Data' >  
               <span className = 'Data_img' > 
                   <img  src = {greentick} />
               </span>
               <p className = 'Data_content' > { e.content }  </p>
          </div>
      })

    return (
        <div className = 'Data_container' >
         
            {Data}
        </div>
    )
}

export default Content
