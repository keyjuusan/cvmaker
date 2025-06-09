import type { IHabilidad, IProps } from "./types";
import { type ChangeEventHandler } from "react";

export default function Habilidades({ habilidades, setHabilidades, habilidad, setHabilidad }: IProps) {

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

    return (
        <>
            <h2>Habilidadess</h2>

            <label htmlFor="habilidad">
                habilidad:
                <input name="habilidad" onChange={handleChange} type="text" id="habilidad" defaultValue={habilidad.habilidad} />
            </label>

            <div>
                nivel:
                <label>
                    basico:
                    <input name="nivel" onChange={handleChange} type="radio" defaultValue="basico" checked={habilidad.nivel === "basico"} />
                </label>
                <label >
                    intermedio:
                    <input onChange={handleChange} type="radio" name="nivel" defaultValue="intermedio" checked={habilidad.nivel === "intermedio"} />
                </label>
                <label >
                    avanzado:
                    <input onChange={handleChange} type="radio" name="nivel" defaultValue="avanzado" checked={habilidad.nivel === "avanzado"} />
                </label>
            </div>

            <button type="button" onClick={addhabilidad}>Agregar Habilidad</button>

            <ul>
                {habilidades.map((Habilidad, i) => {
                    const { habilidad, nivel } = Habilidad
                    return <li key={i}>{habilidad} {nivel}</li>
                })}
            </ul>
        </>
    )
}