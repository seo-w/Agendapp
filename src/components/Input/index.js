import React, { useState } from "react";
import { InputWrapper, Label,InputType, InputContainer, IconWrapper } from "./styles";
import {FaEye, FaEyeSlash} from 'react-icons/fa';

const iconStyle = {
    fontSize: '20px',
    color: '#ccc',
   
}

// componenete para el icono
const Icono = ({ showEye, onPress }) =>(
    <IconWrapper onClick={onPress}> 
        { showEye ? <FaEyeSlash style={iconStyle} /> : <FaEye style={iconStyle}/> }
    </IconWrapper>
);
export const Input = ({ label, type, placeholder }) => {
   
    const [typeInput, setTypeInput] = useState(type);

    const toggleTypeInput = (e) =>{
        setTypeInput(typeInput === "password" ? "text" : "password");
    }
    return(
        <InputContainer>
            <Label>{label}</Label>
            <InputWrapper>
                <InputType   placeholder={placeholder} type={typeInput} />
                { type === "password" && (
                <Icono onPress={toggleTypeInput} showEye={typeInput=== 'text'} />)}
               
            </InputWrapper>
            
        </InputContainer>
    )
       
}