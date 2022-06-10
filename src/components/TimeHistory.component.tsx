import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { Styles } from "../Styles";
import {
  getConfig,
  getTimeRegisterHistory,
  isNullOrUndefined,
  setHighlightStyleToDate
} from "../Helpers/Utils";
import { tPonto } from "../Interfaces/Types";
import * as Localization from "expo-localization";
import { iReport } from "../Interfaces/Interfaces";

export default function TimeHistory({ blnGerarRelatorio }: iReport) {
  const lstPonto: tPonto[] = getTimeRegisterHistory();

  return blnGerarRelatorio ? (
    <SafeAreaView style={Styles.cardConstHeight40PercentContent}>
      <ScrollView style={Styles.scrollView}>
        {isNullOrUndefined(lstPonto) ? (
          <Text style={Styles.text}>Sem registros!</Text>
        ) : (
          lstPonto.map((e: tPonto) => (
            <Text key={e.id} style={setHighlightStyleToDate(e)}>
              {e.tipo}: {e.dataHora.toLocaleDateString(Localization.locale)} as{" "}
              {e.dataHora.toLocaleTimeString(Localization.locale)}
            </Text>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={Styles.cardConstHeight30PercentContent}>
      <ScrollView style={Styles.scrollView}>
        {isNullOrUndefined(lstPonto) ? (
          <Text style={Styles.text}>Sem registros!</Text>
        ) : (
          lstPonto.map(
            (e: tPonto) =>
              e.dataHora.getUTCMonth() === new Date().getUTCMonth() && (
                <Text key={e.id} style={setHighlightStyleToDate(e)}>
                  {e.tipo}: {e.dataHora.toLocaleDateString(Localization.locale)}{" "}
                  as {e.dataHora.toLocaleTimeString(Localization.locale)}
                </Text>
              )
          )
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
