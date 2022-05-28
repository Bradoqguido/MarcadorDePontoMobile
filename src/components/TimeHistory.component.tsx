import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { Styles } from "../Styles";
import { getTimeRegisterHistory, isNullOrUndefined } from "../Helpers/Utils";
import { tPonto } from "../Interfaces/Types";

export default function TimeHistory() {
  const lstPonto: tPonto[] = getTimeRegisterHistory();

  return (
    <SafeAreaView style={Styles.listItem}>
      <ScrollView style={Styles.scrollView}>
        {isNullOrUndefined(lstPonto) ? (
          <Text style={Styles.text}>Sem registros!</Text>
        ) : (
          lstPonto.map((e: tPonto) => (
            <Text key={e.id} style={Styles.text}>
              {e.tipo} - {e.dataHora.toString()}
            </Text>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
