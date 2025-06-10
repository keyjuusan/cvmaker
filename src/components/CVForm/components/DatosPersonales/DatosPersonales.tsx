import type { IProps } from "./types";
import { type ChangeEventHandler } from "react";

export default function datosPersonales({ datosPersonales, setDatosPersonales }: IProps) {
    // console.log(datosPersonales)

    const handleChange: ChangeEventHandler = (e) => {
        const { name, value } = e.target as HTMLInputElement

        setDatosPersonales((prevDatosPersonal) => {
            return { ...prevDatosPersonal, [name]: value }
        })
    }

    return (
        <>
            <h2 className="text-2xl text-center">Datos Personales</h2>

            <div className="flex flex-col gap-2">
                <label htmlFor="nombres" className="flex flex-col">
                    nombres:
                    <input onChange={handleChange} type="text" name="nombres" id="nombres" defaultValue={datosPersonales.nombres} className="border-gray-400 border outline-black rounded p-1"/>
                </label>
                <label htmlFor="apellidos" className="flex flex-col">
                    apellidos:
                    <input onChange={handleChange} type="text" name="apellidos" id="apellidos" defaultValue={datosPersonales.apellidos} className="border-gray-400 border outline-black rounded p-1"/>
                </label>
                <label htmlFor="telefono" className="flex flex-col">
                    telefono:
                    <input onChange={handleChange} type="number" inputMode="tel" name="telefono" id="telefono" defaultValue={datosPersonales.telefono} className="border-gray-400 border outline-black rounded p-1"/>
                </label>
                 <label htmlFor="correo" className="flex flex-col">
                    correo:
                    <input onChange={handleChange} type="email" name="correo" id="correo" defaultValue={datosPersonales.correo} className="border-gray-400 border outline-black rounded p-1"/>
                </label>
                 <label htmlFor="ubicacion" className="flex flex-col">
                    ubicacion:
                    <input onChange={handleChange} type="text" name="ubicacion" id="ubicacion" defaultValue={datosPersonales.ubicacion} className="border-gray-400 border outline-black rounded p-1"/>
                </label>
                <label htmlFor="direccion" className="flex flex-col">
                    direccion:
                    <input onChange={handleChange} type="text" name="direccion" id="direccion" defaultValue={datosPersonales.direccion} className="border-gray-400 border outline-black rounded p-1"/>
                </label>
                <label htmlFor="fNacimiento" className="flex flex-col">
                    fNacimiento:
                    <input onChange={handleChange} type="date" name="fNacimiento" id="fNacimiento" defaultValue={datosPersonales.fNacimiento} className="border-gray-400 border outline-black rounded p-1"/>
                </label>
            </div>
        </>
    )
}