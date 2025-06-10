import moment from "moment";
import type { IExperiencia, IProps } from "./types";
import { type ChangeEventHandler, type MouseEventHandler } from "react";

export default function Experiencia({ experiencias, setExperiencias, experiencia, setExperiencia }: IProps) {

    const addExperiencia = () => {
        setExperiencias((prevExperiencias: IExperiencia[]) => [...prevExperiencias, experiencia]);
        setExperiencia(experiencia);
    };

    const handleChange: ChangeEventHandler = (e) => {
        const { name, value } = e.target as HTMLInputElement

        setExperiencia((prevExperiencia) => {
            return { ...prevExperiencia, [name]: value }
        })
    }

    const eliminarExperiencia: MouseEventHandler = (e) => {
        // tomar el id del <li> padre
        const li = (e.target as HTMLButtonElement).closest("li")
        setExperiencias(prevExperiencias => prevExperiencias.filter((_, i) => i !== Number(li?.id)))
    }

    return (
        <>
            <h2 className="text-2xl text-center">Experiencia</h2>

            <div className="flex flex-col gap-2">
                <label htmlFor="cargo" className="flex flex-col">
                    cargo:
                    <input name="cargo" onChange={handleChange} type="text" id="cargo" defaultValue={experiencia.cargo} className="border-gray-400 border outline-black rounded p-1"/>
                </label>
                <div className="flex gap-3">
                    <label className="has-checked:bg-gray-500 has-checked:text-white flex-1 rounded flex flex-col p-1 text-center border border-gray-500" >
                        en proceso
                        <input name="estado" onChange={handleChange} type="radio" defaultValue="en proceso" checked={experiencia.estado === "en proceso"} className="hidden"/>
                    </label>
                    <label  className="has-checked:bg-gray-500 has-checked:text-white flex-1 rounded flex flex-col p-1 text-center border border-gray-500" >
                        terminado
                        <input onChange={handleChange} type="radio" name="estado" defaultValue="terminado" checked={experiencia.estado === "terminado"} className="hidden"/>
                    </label>
                </div>
                <div className="flex gap-3">
                    {experiencia.estado == "terminado" && (<label htmlFor="fEgreso" className="flex-1 flex flex-col min-w-0">
                        fEgreso:
                        <input name="fEgreso" onChange={handleChange} type="month" id="fEgreso" defaultValue={experiencia.fEgreso} className="border-gray-400 border outline-black rounded p-1"/>
                    </label>)}
                    <label htmlFor="fIngreso" className="flex-1 flex flex-col min-w-0">
                        fIngreso:
                        <input name="fIngreso" onChange={handleChange} type="month" id="fIngreso" defaultValue={experiencia.fIngreso} className="border-gray-400 border outline-black rounded p-1"/>
                    </label>
                </div>
                <label htmlFor="empresa" className="flex flex-col">
                    empresa:
                    <input name="empresa" onChange={handleChange} type="text" id="empresa" defaultValue={experiencia.empresa} className="border-gray-400 border outline-black rounded p-1"/>
                </label>
                <label htmlFor="ubicacion" className="flex flex-col">
                    ubicacion:
                    <input name="ubicacion" onChange={handleChange} type="text" id="ubicacion" defaultValue={experiencia.ubicacion} className="border-gray-400 border outline-black rounded p-1"/>
                </label>
                <button type="button" onClick={addExperiencia} className="flex-1 bg-gray-600 text-white rounded p-1">Agregar experiencia</button>
                <hr />
                <ul className="flex flex-col gap-2">
                    {experiencias.map((experiencia, i) => {
                        const { cargo, estado, fEgreso, fIngreso, empresa, ubicacion } = experiencia
                        const ingreso = moment(fIngreso).format("MMM YYYY")
                        const egreso = estado == "terminado" ? moment(fEgreso).format("MMM YYYY") : ""
                        return (
                            <li key={i} id={String(i)} className="flex text-sm justify-between items-center">
                                <div>
                                    <p>{cargo} [{empresa}, {ubicacion}]</p>
                                    <p className="flex-1 text-xs">{ingreso} {egreso}</p>
                                </div>
                                <button onClick={eliminarExperiencia} type="button" className="size-5 rounded text-white font-bold bg-red-500">x</button>
                            </li>)
                    })}
                </ul>
            </div>
        </>
    )
}