import { Document, Page, Text, View } from "@react-pdf/renderer"
import type { IDataCVForm } from "./CVForm/types"

export default function ModeloPdf1({ dataCV }: { dataCV: IDataCVForm }) {
  const { datosPersonales, experiencias, formaciones, habilidades } = dataCV as IDataCVForm
  return (
    <Document title={"CV " + datosPersonales.nombres.split(" ")[0]}>
      <Page size={"LETTER"}>
        <View style={{ height: 120, backgroundColor: "#2a4365", color: "white", padding: 16, paddingBottom: 8, justifyContent: "space-between" }}>
          <Text style={{ fontSize: 36 }}>
            {datosPersonales.nombres} {datosPersonales.apellidos}
          </Text>
          <View style={{ display: "flex", flexDirection: "row", fontSize: "11", gap: 5 }}>
            <Text>{datosPersonales.ubicacion}</Text>
            <Text>{datosPersonales.correo}</Text>
            <Text>{datosPersonales.telefono}</Text>
          </View>
        </View>

        <View style={{ fontSize: 13, display: "flex", gap: 16, flexDirection: "row", justifyContent: "space-between", padding: 16 }}>
          {/* Lateral izquierda */}
          <View style={{ width: "70%", gap: 8 }}>
            {/* Formación */}
            <View style={{ gap: 8 }}>
              <Text>FORMACIÓN</Text>
              {formaciones.map((formacion, i) => (
                <View key={i} style={{ width: "100%", fontSize: 11, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <View>
                    <Text>{formacion.titulo}</Text>
                    <Text>{formacion.institucion}, {formacion.ubicacion}</Text>
                  </View>
                  <View>
                    <Text>{formacion.fIngreso} - {formacion.estado === "en proceso" ? formacion.estado : formacion.fEgreso}</Text>
                  </View>
                </View>
              ))}
            </View>

            {/* Experiencia */}
            <View style={{ gap: 8, paddingTop: 8, borderTop: "1 solid #cccccc" }}>
              <Text>EXPERIENCIA</Text>
              {experiencias.map((experiencia, i) => (
                <View key={i} style={{ width: "100%", fontSize: 11, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <View>
                    <Text>{experiencia.cargo}</Text>
                    <Text>{experiencia.empresa}, {experiencia.ubicacion}</Text>
                  </View>
                  <View>
                    <Text>{experiencia.fIngreso} - {experiencia.estado === "en proceso" ? experiencia.estado : experiencia.fEgreso}</Text>
                  </View>
                </View>
              ))}
            </View>

            {/* Habilidades */}
            <View style={{ gap: 8, paddingTop: 8, borderTop: "1 solid #cccccc" }}>
              <Text>HABILIDADES</Text>
              <View style={{ fontSize: 11, gap: 8 }}>
                {habilidades.map((habilidad, i) => (
                  <View key={i}>
                    <Text>{habilidad.habilidad}</Text>
                    <Text>{habilidad.nivel}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* Lateral derecha */}
          <View style={{ width: "30%", gap: 8, padding: "0 0 0 16", borderLeft: "1 solid #cccccc" }}>
            <Text>Datos Personales</Text>
            <View style={{ fontSize: 11, gap: 8 }}>
              <View>
                <Text>Nombres:</Text>
                <Text>{datosPersonales.nombres}</Text>
              </View>
              <View>
                <Text>Apellidos:</Text>
                <Text>{datosPersonales.apellidos}</Text>
              </View>
              <View>
                <Text>Correo:</Text>
                <Text>{datosPersonales.correo}</Text>
              </View>
              <View>
                <Text>Teléfono:</Text>
                <Text>{datosPersonales.telefono}</Text>
              </View>
              <View>
                <Text>Direccion:</Text>
                <Text>{datosPersonales.direccion}</Text>
              </View>
              <View>
                <Text>Fecha de Nacimiento:</Text>
                <Text>{datosPersonales.fNacimiento}</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}