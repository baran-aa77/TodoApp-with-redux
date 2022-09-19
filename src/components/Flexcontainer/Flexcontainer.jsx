import React from "react";
import './Flexcontainer.style.css'
const Flexcontainer=({children})=>{
    return(
        <div className='flex-container'>
            {children}
        </div>
    )
}
export default Flexcontainer;