import type { IFormacion, IProps } from "./types";
import { type ChangeEventHandler } from "react";

export default function Formacion({ formaciones, setFormaciones, formacion, setFormacion }: IProps) {

    const addFormacion = () => {
        setFormaciones((prevFormaciones: IFormacion[]) => [...prevFormaciones, formacion]);
        setFormacion(formacion);
    };

    const handleChange: ChangeEventHandler = (e) => {
        const { name, value } = e.target as HTMLInputElement

        setFormacion((prevFormacion) => {
            return { ...prevFormacion, [name]: value }
        })
    }

    return (
        <>
            <h2>Formación</h2>

            <label htmlFor="titulo">
                titulo:
                <input name="titulo" onChange={handleChange} type="text" id="titulo" defaultValue={formacion.titulo} />
            </label>

            <div >
                <div >
                    <input name="estado" onChange={handleChange} type="radio" defaultValue="en proceso" checked={formacion.estado === "en proceso"} id="radio1" />
                    <label htmlFor="radio1" className="label-radio">en proceso</label>
                </div>
                <div >
                    <input onChange={handleChange} type="radio" name="estado" defaultValue="terminado" checked={formacion.estado === "terminado"} id="radio2" />
                    <label htmlFor="radio2" className="label-radio">terminado</label>
                </div>
            </div>

            <div >
                <label htmlFor="fIngreso" >
                    Desde:
                    <input name="fIngreso" onChange={handleChange} type="month" id="fIngreso" defaultValue={formacion.fIngreso} />
                </label>
                {formacion.estado == "terminado" && (
                    <label htmlFor="fEgreso" >
                        Hasta:
                        <input name="fEgreso" onChange={handleChange} type="month" id="fEgreso" defaultValue={formacion.fEgreso} />
                    </label>
                )}
            </div>

            <label htmlFor="institucion">
                institucion:
                <input name="institucion" onChange={handleChange} type="text" id="institucion" defaultValue={formacion.institucion} />
            </label>

            <label htmlFor="ubicacion">
                ubicacion:
                <input name="ubicacion" onChange={handleChange} type="text" id="ubicacion" defaultValue={formacion.ubicacion} />
            </label>

            <button type="button" onClick={addFormacion}>Agregar formación</button>

            <ul>
                {formaciones.map((formacion, i) => {
                    const { titulo, estado, fEgreso, fIngreso, institucion, ubicacion } = formacion
                    return <li key={i}>{titulo} {estado} {fEgreso} {fIngreso} {institucion} {ubicacion}</li>
                })}
            </ul>
        </>
    )
}