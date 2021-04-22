import React from "react";
import { ElementWrapper } from "../../../globalStyles";
import { EncabezadoTarea } from "./EncabezadoTarea";
import { TareaFooter } from "./TareaFooter";


export const Tarea = ({ nombre, estado, responsable, duracion, proyecto }) => (

  <ElementWrapper>
    <EncabezadoTarea nombre={ nombre } />
    <meter id="estado-tarea" max="2" high="1" low="0" value={estado}></meter>
    <TareaFooter 
      responsable={responsable} 
      duracion={duracion} 
      proyecto={proyecto} />
            
  </ElementWrapper>
)
