import React, { useState } from "react";
import { Alert } from "react-native";
import { iAlert } from "../Interfaces/Interfaces";

export function showConfirmAlert({
  strTitle,
  strMessage,
  txtOkButton,
  onPressOkButton,
}: iAlert): void {
  Alert.alert(strTitle, strMessage, [
    { text: txtOkButton, onPress: () => onPressOkButton },
  ]);
}

export function showCancelOrConfirmAlert({
  strTitle,
  strMessage,
  txtCancelButton,
  onPressCancelButton,
  txtOkButton,
  onPressOkButton,
}: iAlert): void {
  Alert.alert(strTitle, strMessage, [
    {
      text: txtCancelButton,
      onPress: () => onPressCancelButton,
      style: "cancel",
    },
    { text: txtOkButton, onPress: () => onPressOkButton },
  ]);
}

export function showAskMeLaterOrCancelOrConfirmAlert({
  strTitle,
  strMessage,
  txtCancelButton,
  onPressCancelButton,
  txtOkButton,
  onPressOkButton,
  txtAskMeLaterButton,
  onPressAskMeLaterButton,
}: iAlert): void {
  Alert.alert(strTitle, strMessage, [
    {
      text: txtAskMeLaterButton,
      onPress: () => onPressAskMeLaterButton,
    },
    {
      text: txtCancelButton,
      onPress: () => onPressCancelButton,
      style: "cancel",
    },
    { text: txtOkButton, onPress: () => onPressOkButton },
  ]);
}
