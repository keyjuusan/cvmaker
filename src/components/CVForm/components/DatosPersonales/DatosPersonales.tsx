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
            <h2>Datos Personales</h2>

            <label htmlFor="nombres">
                nombres:
                <input onChange={handleChange} type="text" name="nombres" id="nombres" defaultValue={datosPersonales.nombres} />
            </label>
            <label htmlFor="apellidos">
                apellidos:
                <input onChange={handleChange} type="text" name="apellidos" id="apellidos" defaultValue={datosPersonales.apellidos} />
            </label>
            <label htmlFor="telefono">
                telefono:
                {/* 
                quitar las flechitas del input numerico
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
                }
                input[type=number] {
                -moz-appearance: textfield;
                }
                 */}
                <input onChange={handleChange} type="number" inputMode="tel" name="telefono" id="telefono" defaultValue={datosPersonales.telefono} />
            </label>
             <label htmlFor="correo">
                correo:
                <input onChange={handleChange} type="email" name="correo" id="correo" defaultValue={datosPersonales.correo} />
            </label>
             <label htmlFor="ubicacion">
                ubicacion:
                <input onChange={handleChange} type="text" name="ubicacion" id="ubicacion" defaultValue={datosPersonales.ubicacion} />
            </label>
            <label htmlFor="direccion">
                direccion:
                <input onChange={handleChange} type="text" name="direccion" id="direccion" defaultValue={datosPersonales.direccion} />
            </label>
            <label htmlFor="fNacimiento">
                fNacimiento:
                <input onChange={handleChange} type="date" name="fNacimiento" id="fNacimiento" defaultValue={datosPersonales.fNacimiento} />
            </label>
        </>
    )
}