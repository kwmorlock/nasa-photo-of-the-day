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

const Headthing = styled.div`
background: hotpink;
color: black;
width: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`;

export default Header;
