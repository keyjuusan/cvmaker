import type { Dispatch, SetStateAction } from "react"

export interface IHabilidad {
    habilidad: string,
    nivel: "basico"|"intermedio"|"avanzado"
}

export interface IProps { 
    habilidades: IHabilidad[],
    setHabilidades: Dispatch<SetStateAction<IHabilidad[]>>, 
    habilidad: IHabilidad, 
    setHabilidad: Dispatch<SetStateAction<IHabilidad>>
}