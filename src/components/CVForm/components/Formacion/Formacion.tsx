import moment from "moment";
import type { IFormacion, IProps } from "./types";
import { useEffect, type ChangeEventHandler, type MouseEventHandler } from "react";

export default function Formacion({ formaciones, setFormaciones, formacion, setFormacion }: IProps) {

    useEffect(()=>{
        setFormacion(formaciones[formaciones.length - 1]??{})

    },[formaciones, setFormacion])

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

    const eliminarFormacion: MouseEventHandler = (e)=>{
        // tomar el id del <li> padre
        const li = (e.target as HTMLButtonElement).closest("li")
        setFormaciones(prevFormaciones=> prevFormaciones.filter((formacion, i)=> i !== Number(li?.id)))
    }

    return (
        <>
            <h2 className="text-2xl text-center">Formación</h2>

            <div className="flex flex-col gap-2">
                <label htmlFor="titulo" className="flex flex-col">
                    Titulo:
                    <input name="titulo" onChange={handleChange} type="text" id="titulo" defaultValue={formacion.titulo} className="border-gray-400 border outline-black rounded p-1" />
                </label>
                <div className="flex gap-3">

                    <label htmlFor="radio1" className="has-checked:bg-gray-500 has-checked:text-white flex-1 rounded flex flex-col p-1 text-center border border-gray-500" >
                        En proceso
                        <input name="estado" onChange={handleChange} type="radio" defaultValue="en proceso" checked={formacion.estado === "en proceso"} id="radio1" className="hidden" />
                    </label>

                    <label htmlFor="radio2" className="has-checked:bg-gray-500 has-checked:text-white flex-1 rounded flex flex-col p-1 text-center border border-gray-500" >
                        Terminado
                        <input onChange={handleChange} type="radio" name="estado" defaultValue="terminado" checked={formacion.estado === "terminado"} id="radio2" className="hidden" />
                    </label>
                </div>
                <div className="flex gap-3">
                    <label htmlFor="fIngreso" className="flex-1 rounded flex flex-col min-w-0" >
                        Desde:
                        <input name="fIngreso" onChange={handleChange} type="month" id="fIngreso" defaultValue={formacion.fIngreso} className="border-gray-400 border outline-black rounded p-1" />
                    </label>
                    {formacion.estado == "terminado" && (
                        <label htmlFor="fEgreso" className="flex-1 rounded flex flex-col min-w-0" >
                            Hasta:
                            <input name="fEgreso" onChange={handleChange} type="month" id="fEgreso" defaultValue={formacion.fEgreso} className="border-gray-400 border outline-black rounded p-1" />
                        </label>
                    )}
                </div>
                <label htmlFor="institucion" className="flex flex-col">
                    Institucion:
                    <input name="institucion" onChange={handleChange} type="text" id="institucion" defaultValue={formacion.institucion} className="border-gray-400 border outline-black rounded p-1" />
                </label>
                <label htmlFor="ubicacion" className="flex flex-col">
                    Ubicacion:
                    <input name="ubicacion" onChange={handleChange} type="text" id="ubicacion" defaultValue={formacion.ubicacion} className="border-gray-400 border outline-black rounded p-1" />
                </label>
                <button type="button" onClick={addFormacion} className="flex-1 bg-gray-600 text-white rounded p-1">Agregar formación</button>
                <hr />
                <ul className="flex flex-col gap-2">
                    {formaciones.map((formacion, i) => {
                        const { titulo, estado, fEgreso, fIngreso, institucion, ubicacion } = formacion
                        const ingreso = moment(fIngreso).format("MMM YYYY")
                        const egreso = estado == "terminado" ? moment(fEgreso).format("MMM YYYY") : "En proceso"
                        return (
                            <li key={i} id={String(i)} className="flex text-sm justify-between items-center">
                                <div>
                                    <p>{titulo} [{institucion}, {ubicacion}]</p>
                                    <p className="flex-1 text-xs">{ingreso} - {egreso}</p>
                                </div>
                                <button onClick={eliminarFormacion} type="button" className="size-5 rounded text-white font-bold bg-red-500">x</button>
                            </li>)
                    })}
                </ul>
            </div>
        </>
    )
}