import type { Dispatch, SetStateAction } from "react"

export interface IExperiencia {
    cargo: string,
    ubicacion: string,
    fEgreso: string,
    fIngreso: string,
    empresa: string,
    estado: "terminado" | "en proceso"
}

export interface IProps { 
    experiencias: IExperiencia[],
    setExperiencias: Dispatch<SetStateAction<IExperiencia[]>>, 
    experiencia: IExperiencia, 
    setExperiencia: Dispatch<SetStateAction<IExperiencia>>
}