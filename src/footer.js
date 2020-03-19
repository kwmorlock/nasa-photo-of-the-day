import React from "react";
import styled from "styled-components";
import {Meowthing} from "./header";

function Footer(props){
    return (
        <Footerthing>
            <Meowtext color= "purple" >{props.copyright}
            </Meowtext>
        </Footerthing>
    )
}

const Footerthing = styled(Meowthing)`
color: black;
width: auto;
max-height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`;

const Meowtext = styled.h1`
${function(props){
    return `color: ${props.color}`
}}
`;
// Meowtext is an interpelation function

export default Footer;

//used hotpinkbackground from header by importing in
//footer uptop by using Meowthing