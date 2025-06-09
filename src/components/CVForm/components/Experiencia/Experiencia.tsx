import type { IExperiencia, IProps } from "./types";
import { type ChangeEventHandler } from "react";

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

    return (
        <>
            <h2>Experiencia</h2>

            <label htmlFor="cargo">
                cargo:
                <input name="cargo" onChange={handleChange} type="text" id="cargo" defaultValue={experiencia.cargo} />
            </label>

            <div>
                estado:
                <label>
                    en proceso
                    <input name="estado" onChange={handleChange} type="radio" defaultValue="en proceso" checked={experiencia.estado === "en proceso"} />
                </label>
                <label >
                    terminado
                    <input onChange={handleChange} type="radio" name="estado" defaultValue="terminado" checked={experiencia.estado === "terminado"} />
                </label>
            </div>

            {experiencia.estado == "terminado" && (<label htmlFor="fEgreso">
                fEgreso:
                <input name="fEgreso" onChange={handleChange} type="month" id="fEgreso" defaultValue={experiencia.fEgreso} />
            </label>)}

            <label htmlFor="fIngreso">
                fIngreso:
                <input name="fIngreso" onChange={handleChange} type="month" id="fIngreso" defaultValue={experiencia.fIngreso} />
            </label>

            <label htmlFor="empresa">
                empresa:
                <input name="empresa" onChange={handleChange} type="text" id="empresa" defaultValue={experiencia.empresa} />
            </label>

            <label htmlFor="ubicacion">
                ubicacion:
                <input name="ubicacion" onChange={handleChange} type="text" id="ubicacion" defaultValue={experiencia.ubicacion} />
            </label>

            <button type="button" onClick={addExperiencia}>Agregar experiencia</button>

            <ul>
                {experiencias.map((experiencia, i) => {
                    const { cargo, estado, fEgreso, fIngreso, empresa, ubicacion } = experiencia
                    return <li key={i}>{cargo} {estado} {fEgreso} {fIngreso} {empresa} {ubicacion}</li>
                })}
            </ul>
        </>
    )
}