import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { Styles } from "../Styles";
import { getTimeRegisterHistory, isNullOrUndefined } from "../Helpers/Utils";
import { tPonto } from "../Interfaces/Types";

export default function TimeHistory() {
  const lstPonto: tPonto[] = getTimeRegisterHistory();

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.scrollView}>
        {isNullOrUndefined(lstPonto) ? (
          <Text>Sem registros!</Text>
        ) : (
          lstPonto.map((e: tPonto) => (
            <Text key={e.id}>
              {e.tipo} - {e.dataHora.toString()}
            </Text>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
