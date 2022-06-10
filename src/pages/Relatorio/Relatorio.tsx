import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import TimeHistory from "../../components/TimeHistory.component";
import { Styles } from "../../Styles";

export default function Relatorio() {
  return (
    <View style={Styles.container}>
      <View style={Styles.cardContent}>
        <View style={Styles.card}>
          <View style={Styles.containerHeader}>
            <View style={Styles.cardHeader}>
              <Text style={Styles.title}>Relatório</Text>
              <Text style={Styles.textBold}>Legenda:</Text>
              <Text style={Styles.textStatusAtrasado}>Atrasado</Text>
              <Text style={Styles.textStatusAdiantado}>Adiantado</Text>
              <Text style={Styles.textStatusHoraExtra}>Hora extra</Text>
            </View>
          </View>

          <View style={Styles.cardContent}>
            <TimeHistory blnGerarRelatorio={true} />
          </View>
        </View>
      </View>
    </View>
  );
}

/*
new date() < inicioExpediente: Adiantado
new date() > inicioExpediente && new date() < inicioAlmoco: Registro inexperado
if new date() < fimAlmoco: Adiantado
	else if (new date() - fimAlmoco) < 1hora: Menos de 1h de almoço
new date() > fimAlmoco && new date() < fimExpediente: Registro inexperado
new date() > fimExpediente: Hora extra
*/
