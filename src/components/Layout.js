import React from 'react'
import Content from './Content'
import Img from './Img'

function Layout({layout,img,data}) {
    // console.log();
    return (
        <div className = 'Layout' >
            <div>
            { layout === 'first' ?  <Img prop = {img } /> : <Content data = {data} />  } 
            </div>

            <div>
            { layout === 'first' ?   <Content data = {data} /> :  <Img prop = { img } />   } 
            </div>
        </div>
    )
}

export default Layout
