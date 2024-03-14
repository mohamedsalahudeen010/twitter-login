import React from 'react'
import "./FloatingDiv.css"

function FloatingDiv({img,text1}) {
  return (
    <div className='floating-div'>
        
           {img? <div className='floating-img'><img src={img} alt="floating-image"></img></div>:""}
            <div className='floating-txt'><span>{text1}</span></div>
       
    </div>
  )
}

export default FloatingDiv