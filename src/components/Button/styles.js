import styled from "styled-components";

export const StyleButton = styled.button ` 
    width:100%;
    background-color: ${props => props.bgColor || '#FA7A01'};
    color: ${props => props.color || '#fff'};
    border-color: ${props => props.bgColor || '#FA7A01'};
    border-width: 1px;
    border-style:solid;
    cursor:pointer;
    padding: 10px 10px;
    text-align: center;
    font-size: 1em;
    border-radius: 10px;
    font-weight:bold;
    outline:none;
`;