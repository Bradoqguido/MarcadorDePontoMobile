import { View, Text } from 'react-native'
import React from 'react'
import { getConfig } from '../Helpers/Utils';
import * as Localization from 'expo-localization';
import { iPontoList } from '../Interfaces/Interfaces';
import { tPonto } from '../Interfaces/Types';
import { Styles } from '../Styles';

export default function FormatExtraMinutes({lstPonto}: iPontoList) {
    let numMinutesSum: number = 0;

    for (let i = 0; i < lstPonto.length; i++) {
      const tmpPonto: tPonto = lstPonto[i];
  
    //   console.log(tmpPonto.dataHora.toLocaleDateString(Localization.locale) + ' ' + tmpPonto.dataHora.toLocaleTimeString(Localization.locale));
      if (
        tmpPonto.dataHora.toLocaleTimeString(Localization.locale) <
        getConfig().dtaHorarioInicioExpedinte.toLocaleTimeString(Localization.locale)
      ) {
         numMinutesSum += getConfig().dtaHorarioInicioExpedinte.getMinutes() - tmpPonto.dataHora.getMinutes();
      }
  
      if (
        tmpPonto.dataHora.toLocaleTimeString(Localization.locale) >
          getConfig().dtaHorarioInicioAlmoco.toLocaleTimeString(Localization.locale) &&
        tmpPonto.dataHora.toLocaleTimeString(Localization.locale) <
          getConfig().dtaHorarioFimAlmoco.toLocaleTimeString(Localization.locale)
      ) {
          numMinutesSum += tmpPonto.dataHora.getMinutes();
      }
  
      if (
        tmpPonto.dataHora.toLocaleTimeString(Localization.locale) >
        getConfig().dtaHorarioFimExpediente.toLocaleTimeString(Localization.locale)
      ) {
          numMinutesSum +=
            getConfig().dtaHorarioFimExpediente.getMinutes() === 0
              ? tmpPonto.dataHora.getMinutes()
              : getConfig().dtaHorarioFimExpediente.getMinutes() -
                tmpPonto.dataHora.getMinutes();
      }    
    }
    return (
        <View>
            {numMinutesSum > 0 ? <Text style={Styles.textStatusHoraExtra}>Minutos extras do dia: {numMinutesSum}</Text> : <Text></Text>}
        </View>
    );
}