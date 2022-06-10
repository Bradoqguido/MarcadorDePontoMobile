import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { Styles } from "../Styles";
import {
  getTimeRegisterHistory,
  isNullOrUndefined,
  joinPontoByDate
} from "../Helpers/Utils";
import { tPonto, tPontoJoin } from "../Interfaces/Types";
import * as Localization from "expo-localization";
import { iReport } from "../Interfaces/Interfaces";
import PrintTimeByDate from "./PrintTimeByDate.component";

export default function TimeHistory({ blnGerarRelatorio }: iReport) {
  const lstPonto: tPonto[] = getTimeRegisterHistory();
  const lstJoinedTimeByDate: tPontoJoin[] = joinPontoByDate(lstPonto);

  return blnGerarRelatorio ? (
    <SafeAreaView style={Styles.cardConstHeight40PercentContent}>
      <ScrollView style={Styles.scrollView}>
        {isNullOrUndefined(lstPonto) ? (
          <Text style={Styles.text}>Sem registros!</Text>
        ) : (
          lstJoinedTimeByDate.map((e: tPontoJoin) => (
            <PrintTimeByDate pJoinPonto={e}/>
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
          lstJoinedTimeByDate.map((e: tPontoJoin) => (
            e.date.getUTCMonth() === new Date().getUTCMonth() &&
            <PrintTimeByDate pJoinPonto={e}/>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}