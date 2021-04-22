import { PageWrapper} from "../../globalStyles";
import { Tarea } from "./components/Tarea";

const Tareas = [
    {
        nombre: "Maquetacion Correo",
        estado: 0,
        responsable: "Sarita",
        duracion: "02:00:00",
        proyecto: "Renting"
    },
    {
        nombre: "Ajustes Home",
        estado: 1,
        responsable: "Sarita",
        duracion: "02:00:00",
        proyecto: "Renting"
    },
    {
        nombre: "Formulario",
        estado: 2,
        responsable: "Sarita",
        duracion: "02:00:00",
        proyecto: "Renting"
    },
    {
        nombre: "Correcciones Formulario",
        estado: 0,
        responsable: "Sarita",
        duracion: "02:00:00",
        proyecto: "Renting"
    }
];

export const Home = () => (
    
    <PageWrapper>
        <p>home</p>
        
        {Tareas.map((item, i) => (
          <Tarea key={i} {...item} />
        ))}

    </PageWrapper>
    
)