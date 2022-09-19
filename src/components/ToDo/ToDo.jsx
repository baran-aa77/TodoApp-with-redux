import React from "react";
const ToDo=({title,description,onClick,onClickUpdate})=>{
    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <button onClick={onClick}>delete me!</button>
            <button onClick={onClickUpdate}>update me!</button>

        </div>
    );
};

export default ToDo;