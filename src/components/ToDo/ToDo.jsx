import React from "react";
const ToDo=({title,description,onClick,onClickUpdate})=>{
    return(
        <div style={{gap:'10px',display:'flex',border:'1px solid #1c2dc7',padding:'8px',backgroundColor:'#dce1f5'}}>

            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
<div style={{margin:'auto'}}>
    <button onClick={onClick}style={{margin:'10px'}}>delete me!</button>
    <button onClick={onClickUpdate}>update me!</button>
</div>


        </div>
    );
};

export default ToDo;