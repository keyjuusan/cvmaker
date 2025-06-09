import type { Dispatch, SetStateAction } from "react"

export interface IFormacion {
    titulo: string,
    institucion: string,
    ubicacion: string,
    fIngreso: string,
    fEgreso: string,
    estado: "terminado" | "en proceso"
}

export interface IProps { 
    formaciones: IFormacion[],
    setFormaciones: Dispatch<SetStateAction<IFormacion[]>>, 
    formacion: IFormacion, 
    setFormacion: Dispatch<SetStateAction<IFormacion>>
}