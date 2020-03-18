import React from "react";

function Body(props){
    return (
        <>
    <div>
        <img src= {props.url}/> 
    </div>
        <div>
            <p>{props.explanation}
            </p>
        </div>
        </>
    )
}

export default Body;



// <> </> is anonymous element needed since using two divs, only one parent element