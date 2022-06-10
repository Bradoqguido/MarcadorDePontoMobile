import { View, Text } from "react-native";
import React from "react";
import { iPontoJoin } from "../Interfaces/Interfaces";
import * as Localization from "expo-localization";
import { Styles } from "../Styles";
import { tPonto } from "../Interfaces/Types";
import { getConfig, setHighlightStyleToDate } from "../Helpers/Utils";
import FormatExtraMinutes from "./FormatExtraMinutes.component";

export default function PrintTimeByDate({ pJoinPonto }: iPontoJoin) {
  return (
    <View>
      <View style={Styles.card}>
        <View style={Styles.containerHeader}>
          <View style={Styles.cardHeader}>
            <Text style={Styles.title}>
              Data: {pJoinPonto.date.toLocaleDateString(Localization.locale)}
            </Text>
          </View>
        </View>

        <View style={Styles.cardContent}>
          {pJoinPonto.lstPonto.map(
            (e: tPonto) =>
              e.dataHora.getUTCMonth() === new Date().getUTCMonth() && (
                <Text key={e.id} style={setHighlightStyleToDate(e)}>
                  {e.tipo}: {e.dataHora.toLocaleTimeString(Localization.locale)}
                </Text>
              )
          )}
          <FormatExtraMinutes lstPonto={pJoinPonto.lstPonto}/>
        </View>
      </View>
    </View>
  );
}