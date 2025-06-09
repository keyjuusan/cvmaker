import { useEffect, useState} from "react"
import {CVForm} from "./components"
import type { IDataCVForm } from "./components/CVForm/types"
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer"
import ModeloPdf1 from "./components/ModeloPdf1"

const initialState:IDataCVForm = {
  datosPersonales: {
    nombres: "",
    apellidos: "",
    telefono: 0,
    direccion: "",
    fNacimiento: "",
    ubicacion: "",
    correo: ""
  },
  formaciones: [],
  experiencias: [],
  habilidades: []
}

function App() {
  const [dataCVForm,setDataCVForm] = useState<IDataCVForm>(initialState)

  useEffect(()=>{
    const dataStorage = localStorage.getItem("datasCVForm")
    if(dataStorage){
      const parsedData = JSON.parse(dataStorage)
      setDataCVForm(prev=>({...prev,...parsedData[parsedData.length - 1]}))
    }
  },[])

  return (
    <>
      <CVForm dataCVForm={dataCVForm} setDataCVForm={setDataCVForm}/>
      {/* <PDFViewer height={300} width={"100%"}>
        <ModeloPdf1 dataCV={dataCVForm}/>
      </PDFViewer> */}
      <PDFDownloadLink fileName={"CV "+dataCVForm.datosPersonales.nombres.split(" ")[0]} document={<ModeloPdf1 dataCV={dataCVForm} />}>
        descargar pdf
      </PDFDownloadLink>
    </>
  )
}

export default App
