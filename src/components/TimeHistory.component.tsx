import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { Styles } from "../Styles";
import {
  getConfig,
  getTimeRegisterHistory,
  isNullOrUndefined,
} from "../Helpers/Utils";
import { tPonto } from "../Interfaces/Types";
import * as Localization from "expo-localization";
import { iPonto, iReport } from "../Interfaces/Interfaces";

function setHighlightStyleToDate(pPonto: tPonto) {
  let style: any = Styles.text;
  // Marca pontos antes do horário de inicio do expediente.
  if (
    pPonto.dataHora.toLocaleTimeString(Localization.locale) <
    getConfig().dtaHorarioInicioExpedinte.toLocaleTimeString(Localization.locale)
  ) {
    style = Styles.textStatusHoraExtra;
  }

  // Marca registros durante o periodo entre o inicio do expediente e o inicio do almoço.
  if (
    pPonto.dataHora.toLocaleTimeString(Localization.locale) >
      getConfig().dtaHorarioInicioExpedinte.toLocaleTimeString(Localization.locale) &&
    pPonto.dataHora.toLocaleTimeString(Localization.locale) <
      getConfig().dtaHorarioInicioAlmoco.toLocaleTimeString(Localization.locale)
  ) {
    style = Styles.textStatusAtrasado;
  }

  // Marca pontos durante o almoço.
  if (
    pPonto.dataHora.toLocaleTimeString(Localization.locale) >
      getConfig().dtaHorarioInicioAlmoco.toLocaleTimeString(Localization.locale) &&
    pPonto.dataHora.toLocaleTimeString(Localization.locale) <
      getConfig().dtaHorarioFimAlmoco.toLocaleTimeString(Localization.locale)
  ) {
    style = Styles.textStatusAdiantado;
  }

  // Marca registros durante o periodo entre o fim do almoço e o fim do expediente.
  if (
    pPonto.dataHora.toLocaleTimeString(Localization.locale) >
      getConfig().dtaHorarioFimAlmoco.toLocaleTimeString(Localization.locale) &&
    pPonto.dataHora.toLocaleTimeString(Localization.locale) <
      getConfig().dtaHorarioFimExpediente.toLocaleTimeString(Localization.locale)
  ) {
    style = Styles.textStatusAtrasado;
  }

  // Marca registros após o o fim do expediente.
  if (
    pPonto.dataHora.toLocaleTimeString(Localization.locale) >
    getConfig().dtaHorarioFimExpediente.toLocaleTimeString(Localization.locale)
  ) {
    style = Styles.textStatusHoraExtra;
  }

  return style;
}

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
