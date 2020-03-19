import React from "react";
import styled from "styled-components";

function Body(props){
    return (
        <>
    <Bodything>
        <img src= {props.url}/> 
    </Bodything>
        <Bodythingtwo>
            <p>{props.explanation}
            </p>
        </Bodythingtwo>
        </>
    )
}

const Bodything = styled.div`
background: lightblue;
color: black;
width: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
`;

const Bodythingtwo = styled.div`
background: lightblue;
color: black;
width: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
`;

export default Body;



// <> </> is anonymous element needed since using two divs, only one parent element