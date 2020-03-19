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
background: #99f3eb;
color: black;
width: 200px;
max-height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
`;

const Bodythingtwo = styled.div`
background: #99f3eb;
color: black;
width: 200px;
max-height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
`;

export default Body;



// <> </> is anonymous element needed since using two divs, only one parent element