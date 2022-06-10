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