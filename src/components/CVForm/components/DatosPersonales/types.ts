import type { Dispatch, SetStateAction } from "react"

export interface IDatosPersonales {
    nombres:string,
    apellidos:string,
    // dni:string,
    telefono:number,
    direccion:string,
    fNacimiento:string,
    ubicacion:string,
    correo:string
}

export interface IProps { 
    datosPersonales: IDatosPersonales, 
    setDatosPersonales: Dispatch<SetStateAction<IDatosPersonales>>
}