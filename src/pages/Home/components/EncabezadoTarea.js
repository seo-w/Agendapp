//import React from "react";
import { FaEllipsisV } from 'react-icons/fa';
import { EncabezadoTareaWrapper } from "./styles";


export const EncabezadoTarea = ({nombre, responsable, duracion, proyecto}) =>(

    <EncabezadoTareaWrapper>
      <h3>{nombre}</h3> <button><FaEllipsisV /></button>
     
    </EncabezadoTareaWrapper>
   
    

)