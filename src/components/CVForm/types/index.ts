import type { Dispatch, SetStateAction } from "react";
import type { IDatosPersonales } from "../components/DatosPersonales/types";
import type { IFormacion } from "../components/Formacion/types";
import type { IExperiencia } from "../components/Experiencia/types";
import type { IHabilidad } from "../components/Habilidades/types";

export interface IDataCVForm{
  datosPersonales:IDatosPersonales,
  formaciones:IFormacion[],
  experiencias:IExperiencia[],
  habilidades:IHabilidad[]

}

export interface IProps{
    dataCVForm:IDataCVForm,
    setDataCVForm:Dispatch<SetStateAction<IDataCVForm>>
    
}