import React from "react";
import styled from "styled-components";


function Header(props) {
    return (
    <Headthing>
        <h1>{props.title}</h1>
    </Headthing>
    )
}

//styles
export const Meowthing = styled.div`
background: hotpink;
`;

const Headthing = styled(Meowthing)`
background: hotpink;
border: 20px solid purple;
border-radius: 20px;
color: black;
width: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`;

export default Header;


//Meowthing has to be above Headthing, order matters
//have to export to use in another file