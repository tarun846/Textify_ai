import React from 'react'

function Button({children , Color}) {
    console.log(children,Color);
    return (
       
      <button className = 'Component_btn'    >{children}</button>            
       
    )
}

export default Button
