import { useEffect, useState, type FormEventHandler } from "react";
import { DatosPersonales, Experiencia, Formacion, Habilidades } from "./components"
import type { IFormacion } from "./components/Formacion/types";
import type { IExperiencia } from "./components/Experiencia/types";
import type { IHabilidad } from "./components/Habilidades/types";
import type { IDatosPersonales } from "./components/DatosPersonales/types";
import type { IDataCVForm, IProps } from "./types";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ModeloPdf1 from "../ModeloPdf1";

export default function CVForm({ dataCVForm, setDataCVForm }: IProps) {
    const [step, setStep] = useState(1);
    const MAX_STEPS = 3

    // Estados para listas
    const [datosPersonales, setDatosPersonales] = useState<IDatosPersonales>(dataCVForm.datosPersonales)

    const [formaciones, setFormaciones] = useState<IFormacion[]>(dataCVForm.formaciones ?? []);
    const [formacion, setFormacion] = useState<IFormacion>({} as IFormacion);

    const [experiencias, setExperiencias] = useState<IExperiencia[]>(dataCVForm.experiencias ?? []);
    const [experiencia, setExperiencia] = useState<IExperiencia>({} as IExperiencia);

    const [habilidades, setHabilidades] = useState<IHabilidad[]>(dataCVForm.habilidades ?? []);
    const [habilidad, setHabilidad] = useState<IHabilidad>({} as IHabilidad);

    useEffect(() => {
        setDatosPersonales(dataCVForm.datosPersonales ?? {});
        setFormaciones(dataCVForm.formaciones ?? []);
        setExperiencias(dataCVForm.experiencias ?? []);
        setHabilidades(dataCVForm.habilidades ?? []);
    }, [dataCVForm]);

    const next = () => setStep((s) => Math.min(s + 1, MAX_STEPS));
    const prev = () => setStep((s) => Math.max(s - 1, 0));

    const submitHandler: FormEventHandler = (e) => {
        e.preventDefault()

        const dataForm: IDataCVForm = {
            datosPersonales: datosPersonales,
            formaciones: formaciones,
            experiencias: experiencias,
            habilidades: habilidades
        }

        setDataCVForm(prevDataCVForm => ({ ...prevDataCVForm, ...dataForm }))

        const prevDatasCVForm = JSON.parse(localStorage.getItem("datasCVForm") ?? "[]")

        console.log(prevDatasCVForm)

        if (!prevDatasCVForm.length) {
            localStorage.removeItem("datasCVForm")
        }

        localStorage.setItem("datasCVForm", JSON.stringify([...prevDatasCVForm, { ...dataForm, id: prevDatasCVForm.length }]))

        console.log("enviando")
    }

    return (
        <form onSubmit={submitHandler} className="w-9/10 flex flex-col h-[95dvh] gap-3 p-3 bg-white justify-between">
            <div className="flex flex-col gap-4">
                {step === 0 && (
                    <DatosPersonales setDatosPersonales={setDatosPersonales} datosPersonales={datosPersonales} />
                )}
                {step === 1 && (
                    <Formacion formacion={formacion} formaciones={formaciones} setFormacion={setFormacion} setFormaciones={setFormaciones} />
                )}
                {step === 2 && (
                    <Experiencia experiencia={experiencia} experiencias={experiencias} setExperiencia={setExperiencia} setExperiencias={setExperiencias} />
                )}
                {step === 3 && (
                    <Habilidades habilidad={habilidad} habilidades={habilidades} setHabilidad={setHabilidad} setHabilidades={setHabilidades} />
                )}
            </div>

            <div className="flex gap-3">
                {step > 0 && (
                    <button type="button" onClick={prev} className="flex-1 bg-gray-600 text-white rounded p-1">
                        Anterior
                    </button>
                )}
                {step < MAX_STEPS && (
                    <button type="button" onClick={next}  className="flex-1 bg-gray-600 text-white rounded p-1">
                        Siguiente
                    </button>
                )}
                {step == MAX_STEPS && (
                    <PDFDownloadLink className="flex-1 bg-gray-600 text-white text-center rounded p-1" fileName={"CV " + dataCVForm.datosPersonales.nombres.split(" ")[0]} document={<ModeloPdf1 dataCV={dataCVForm} />}>
                        Descargar CV
                    </PDFDownloadLink>
                )}
            </div>
        </form>
    );
}