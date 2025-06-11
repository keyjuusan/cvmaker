import type { IHabilidad, IProps } from "./types";
import { useEffect, type ChangeEventHandler, type MouseEventHandler } from "react";

export default function Habilidades({ habilidades, setHabilidades, habilidad, setHabilidad }: IProps) {

    useEffect(() => {
        setHabilidad(habilidades[habilidades.length - 1] ?? {});
    }, [habilidades, setHabilidad])

    const addhabilidad = () => {
        setHabilidades((prevHabilidades: IHabilidad[]) => [...prevHabilidades, habilidad]);
        setHabilidad(habilidad);
    };

    const handleChange: ChangeEventHandler = (e) => {
        const { name, value } = e.target as HTMLInputElement

        setHabilidad((prevHabilidad) => {
            return { ...prevHabilidad, [name]: value }
        })
    }

    const eliminarHabilidad: MouseEventHandler = (e) => {
        // tomar el id del <li> padre
        const li = (e.target as HTMLButtonElement).closest("li")
        setHabilidades(prevHabilidades => prevHabilidades.filter((_, i) => i !== Number(li?.id)))
    }

    return (
        <>
            <h2 className="text-2xl text-center">Habilidades</h2>

            <div className="flex flex-col gap-3">
                <label htmlFor="habilidad" className="flex flex-col">
                    habilidad:
                    <input name="habilidad" onChange={handleChange} type="text" id="habilidad" defaultValue={habilidad.habilidad} className="border-gray-400 border outline-black rounded p-1" />
                </label>
                <div className="flex gap-3">
                    <label className="has-checked:bg-gray-500 has-checked:text-white flex-1 rounded flex flex-col p-1 text-center border border-gray-500">
                        basico
                        <input name="nivel" onChange={handleChange} type="radio" defaultValue="basico" checked={habilidad.nivel === "basico"} className="hidden" />
                    </label>
                    <label className="has-checked:bg-gray-500 has-checked:text-white flex-1 rounded flex flex-col p-1 text-center border border-gray-500">
                        intermedio
                        <input onChange={handleChange} type="radio" name="nivel" defaultValue="intermedio" checked={habilidad.nivel === "intermedio"} className="hidden" />
                    </label>
                    <label className="has-checked:bg-gray-500 has-checked:text-white flex-1 rounded flex flex-col p-1 text-center border border-gray-500">
                        avanzado
                        <input onChange={handleChange} type="radio" name="nivel" defaultValue="avanzado" checked={habilidad.nivel === "avanzado"} className="hidden" />
                    </label>
                </div>
                <button type="button" onClick={addhabilidad} className="flex-1 bg-gray-600 text-white rounded p-1">Agregar Habilidad</button>
                <hr />
                <ul className="flex flex-col gap-2">
                    {habilidades.map((Habilidad, i) => {
                        const { habilidad, nivel } = Habilidad
                        return (
                            <li key={i} id={String(i)} className="flex text-sm justify-between items-center">
                                <div>
                                    <p>{habilidad}</p>
                                    <p>{nivel}</p>
                                </div>
                                <button onClick={eliminarHabilidad} type="button" className="size-5 rounded text-white font-bold bg-red-500">x</button>
                            </li>)
                    })}
                </ul>
            </div>
        </>
    )
}