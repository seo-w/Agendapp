import styled from "styled-components";

export const ItemWrapper = styled.div `
    flex:1;
    /*display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding: 10px 0 0;
        text-decoration:none;
        cursor:pointer;
        transition: all 0.3s ease;*/
    svg{
        color: ${props => props.active ? '#0066FF' : '#C7C7CC'};
        font-size:1.1.em;
    }
    /*border:1px solid red;*/
    
    a{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding: 10px 0 0;
        text-decoration:none;
        cursor:pointer;
        transition: all 0.3s ease;
    }
    &:hover{
        /*background-color:#C7C7CC;*/
        box-shadow: inset 0px 3px 20px 1px #efefef;
        svg,p{
            color:#0066FF;
        }
        transition: all 0.3s ease;
    }
    /*.active{ 
        svg,p{
            color:#0066FF;
        }
    }*/
`;
export const Label = styled.p`
    line-height:0;
    color: ${props => props.active ? '#0066FF' : '#C7C7CC'};
    font-size: 0.95em;
    
`;
