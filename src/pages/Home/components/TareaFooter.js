import { FaRegClock } from "react-icons/fa";
import { TareaFooterStyle } from "./styles";

export const TareaFooter = ({responsable, duracion, proyecto}) =>{
   
  const ParseTime = ({duracion}) =>{
     let cadena = duracion;
     cadena = cadena.split(':');
     let horas = cadena[0];
     let minutos = cadena[1];
     return (`${horas}h ${minutos}m`);
     
  }


   
  return(
    <TareaFooterStyle>
      <div class="cliente">
        <span className="proyecto">{proyecto}</span>
        <span>{responsable}</span>
      </div>
      <div><FaRegClock /> <ParseTime duracion={duracion} /></div>
      
    </TareaFooterStyle>
  )
}