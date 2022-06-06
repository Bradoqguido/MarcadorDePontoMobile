import { StatusBar } from "expo-status-bar";
import { Button, Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Styles } from "../../Styles";
import { NavigationContainer } from "@react-navigation/native";
import DateTimePickerAndroid from "@react-native-community/datetimepicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { getConfig, isNullOrUndefined, setConfig } from "../../Helpers/Utils";
import { tConfig } from "../../Interfaces/Types";
import * as Localization from "expo-localization";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { showConfirmAlert } from "../../components/Alert.component";
import { iAlert } from "../../Interfaces/Interfaces";

export default function Configuracao() {
  const [mode, setMode] = useState("time");
  const [
    showDatePickerHorarioInicioExpedinte,
    setShowDatePickerHorarioInicioExpedinte,
  ] = useState(false);
  const [
    showDatePickerHorarioFimExpediente,
    setShowDatePickerHorarioFimExpediente,
  ] = useState(false);
  const [
    showDatePickerHorarioInicioAlmoco,
    setShowDatePickerHorarioInicioAlmoco,
  ] = useState(false);
  const [showDatePickerHorarioFimAlmoco, setShowDatePickerHorarioFimAlmoco] =
    useState(false);

  const [dtaHorarioInicioExpedinte, setHorarioInicioExpediente] = useState(
    isNullOrUndefined(getConfig().dtaHorarioInicioExpedinte)
      ? new Date()
      : getConfig().dtaHorarioInicioExpedinte
  );
  const [dtaHorarioFimExpediente, setHorarioFimExpediente] = useState(
    isNullOrUndefined(getConfig().dtaHorarioFimExpediente)
      ? new Date()
      : getConfig().dtaHorarioFimExpediente
  );
  const [dtaHorarioInicioAlmoco, setHorarioInicioAlmoco] = useState(
    isNullOrUndefined(getConfig().dtaHorarioInicioAlmoco)
      ? new Date()
      : getConfig().dtaHorarioInicioAlmoco
  );
  const [dtaHorarioFimAlmoco, setHorarioFimAlmoco] = useState(
    isNullOrUndefined(getConfig().dtaHorarioFimAlmoco)
      ? new Date()
      : getConfig().dtaHorarioFimAlmoco
  );

  const onChange = (event: any, selectedDate: any) => {
    const currentDate: Date = isNullOrUndefined(selectedDate)
      ? new Date()
      : selectedDate;
    currentDate.setSeconds(0);
    currentDate.setMilliseconds(0);

    console.log("Config editada:");
    console.log("Inicio expedinte: " + showDatePickerHorarioInicioExpedinte);
    console.log("Fim expedinte: " + showDatePickerHorarioFimExpediente);
    console.log("Inicio almoco: " + showDatePickerHorarioInicioAlmoco);
    console.log("Fim almoco: " + showDatePickerHorarioFimAlmoco);

    if (showDatePickerHorarioInicioExpedinte) {
      setHorarioInicioExpediente(
        isNullOrUndefined(currentDate) ? new Date() : currentDate
      );
      setShowDatePickerHorarioInicioExpedinte(false);
      return;
    }
    if (showDatePickerHorarioFimExpediente) {
      setHorarioFimExpediente(
        isNullOrUndefined(currentDate) ? new Date() : currentDate
      );
      setShowDatePickerHorarioFimExpediente(false);
      return;
    }
    if (showDatePickerHorarioInicioAlmoco) {
      setHorarioInicioAlmoco(
        isNullOrUndefined(currentDate) ? new Date() : currentDate
      );
      setShowDatePickerHorarioInicioAlmoco(false);
      return;
    }
    if (showDatePickerHorarioFimAlmoco) {
      setHorarioFimAlmoco(
        isNullOrUndefined(currentDate) ? new Date() : currentDate
      );
      setShowDatePickerHorarioFimAlmoco(false);
      return;
    }
  };

  function SaveConfig(): void {
    const config: tConfig = {
      dtaHorarioInicioExpedinte,
      dtaHorarioFimExpediente,
      dtaHorarioInicioAlmoco,
      dtaHorarioFimAlmoco,
    };
    setConfig(config);
    console.log(getConfig());
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.containerHeader}>
        <StatusBar style="auto" />
        <View>
          <Text style={Styles.title}>Configurações Marcar Ponto</Text>
        </View>
      </View>

      <View style={Styles.card}>
        <View style={Styles.cardHeader}>
          <Text style={Styles.title}>Hora de início do expediente</Text>
        </View>

        <View style={Styles.cardContent}>
          <Text style={Styles.title}>
            {isNullOrUndefined(dtaHorarioInicioExpedinte)
              ? ""
              : `${dtaHorarioInicioExpedinte.toLocaleTimeString(
                  Localization.locale
                )}`}
          </Text>

          <View>
            {showDatePickerHorarioInicioExpedinte && (
              <DateTimePicker
                testID="dateTimePicker"
                value={dtaHorarioInicioExpedinte}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </View>
        </View>

        <View style={Styles.cardActions}>
          <View style={Styles.cardActionButtons}>
            <FontAwesome.Button
              name="pencil"
              onPress={() => setShowDatePickerHorarioInicioExpedinte(true)}
            >
              Definir
            </FontAwesome.Button>
          </View>
        </View>
      </View>

      <View style={Styles.card}>
        <View style={Styles.cardHeader}>
          <Text style={Styles.title}>Hora de fim do expediente</Text>
        </View>

        <View style={Styles.cardContent}>
          <Text style={Styles.title}>
            {isNullOrUndefined(dtaHorarioFimExpediente)
              ? ""
              : `${dtaHorarioFimExpediente.toLocaleTimeString(
                  Localization.locale
                )}`}
          </Text>

          <View>
            {showDatePickerHorarioFimExpediente && (
              <DateTimePicker
                testID="dateTimePicker"
                value={dtaHorarioFimExpediente}
                mode={"time"}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </View>
        </View>

        <View style={Styles.cardActions}>
          <View style={Styles.cardActionButtons}>
            <FontAwesome.Button
              name="pencil"
              onPress={() => setShowDatePickerHorarioFimExpediente(true)}
            >
              Definir
            </FontAwesome.Button>
          </View>
        </View>
      </View>

      <View style={Styles.card}>
        <View style={Styles.cardHeader}>
          <Text style={Styles.title}>Hora de início do almoço</Text>
        </View>

        <View style={Styles.cardContent}>
          <Text style={Styles.title}>
            {isNullOrUndefined(dtaHorarioInicioAlmoco)
              ? ""
              : `${dtaHorarioInicioAlmoco.toLocaleTimeString(
                  Localization.locale
                )}`}
          </Text>

          <View>
            {showDatePickerHorarioInicioAlmoco && (
              <DateTimePicker
                testID="dateTimePicker"
                value={dtaHorarioInicioAlmoco}
                mode={"time"}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </View>
        </View>

        <View style={Styles.cardActions}>
          <View style={Styles.cardActionButtons}>
            <FontAwesome.Button
              name="pencil"
              onPress={() => setShowDatePickerHorarioInicioAlmoco(true)}
            >
              Definir
            </FontAwesome.Button>
          </View>
        </View>
      </View>

      <View style={Styles.card}>
        <View style={Styles.cardHeader}>
          <Text style={Styles.title}>Hora de fim do almoço</Text>
        </View>

        <View style={Styles.cardContent}>
          <Text style={Styles.title}>
            {isNullOrUndefined(dtaHorarioFimAlmoco)
              ? ""
              : `${dtaHorarioFimAlmoco.toLocaleTimeString(
                  Localization.locale
                )}`}
          </Text>

          <View>
            {showDatePickerHorarioFimAlmoco && (
              <DateTimePicker
                testID="dateTimePicker"
                value={dtaHorarioFimAlmoco}
                mode={"time"}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </View>
        </View>

        <View style={Styles.cardActions}>
          <View style={Styles.cardActionButtons}>
            <FontAwesome.Button
              name="pencil"
              onPress={() => setShowDatePickerHorarioFimAlmoco(true)}
            >
              Definir
            </FontAwesome.Button>
          </View>
        </View>
      </View>

      <View style={Styles.cardContent}>
        <FontAwesome.Button
          name="save"
          onPress={() => {
            const alertOptions: iAlert = {
              strTitle: "Informação",
              strMessage: "Registro Salvo com sucesso!",
              txtCancelButton: "",
              onPressCancelButton: {},
              txtOkButton: "Confirmar",
              onPressOkButton: SaveConfig(),
              txtAskMeLaterButton: "",
              onPressAskMeLaterButton: {},
            };
            showConfirmAlert(alertOptions);
          }}
        >
          Salvar
        </FontAwesome.Button>
      </View>
    </View>
  );
}
