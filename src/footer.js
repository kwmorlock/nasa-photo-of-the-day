import React from "react";
import styled from "styled-components";

function Footer(props){
    return (
        <Footerthing>
            <h1>{props.copyright}
            </h1>
        </Footerthing>
    )
}

const Footerthing = styled.div`
background: Hotpink;
color: black;
width: auto;
max-height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
`;

export default Footer;
