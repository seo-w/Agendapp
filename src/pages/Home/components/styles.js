import styled from "styled-components";

export const EncabezadoTareaWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin-bottom:7px;

  button{
    background-color:transparent;
    border:1px solid transparent;
    outline:none;
    color: #AEAEB2;
    font-size: 1.1rem;
    &:hover{
      border: 1px solid #E3EEFF;
      background-color:#E3EEFF;
      border-radius:8px;
      padding-top:3px;
      color:#000;
    }
  }
`;

export const TareaFooterStyle = styled.div`
  display: flex;
  justify-content:space-between;
  color: #8A8A8E;
  font-size:0.95rem;
  margin-top:8px;
  .cliente{
    display:inline-block;
  }
  .proyecto{
    font-size:0.8em;
    color: #0066FF;
    background-color: rgb(0 102 255 / 10%);
    padding: 4px 10px;
    border-radius: 2px;
    margin-right:15px; 
  }
  svg{
    font-size: 1.1rem;
    vertical-align: bottom;
  }
`