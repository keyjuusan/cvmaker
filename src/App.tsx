import { useEffect, useState} from "react"
import {CVForm} from "./components"
import type { IDataCVForm } from "./components/CVForm/types"

import "./App.css"

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
    <div className="h-dvh bg-gray-100 flex justify-center items-center">
      <CVForm dataCVForm={dataCVForm} setDataCVForm={setDataCVForm}/>
      {/* <PDFViewer height={300} width={"100%"}>
        <ModeloPdf1 dataCV={dataCVForm}/>
      </PDFViewer> */}
      
    </div>
  )
}

export default App
