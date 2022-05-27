import React from "react";
import { iComponent } from "../Interfaces/Interfaces";
import styled from "styled-components/native";

export default function InputComponent({ onPress, title }: iComponent) {
  const InputTextContainer = styled.input`
    /* activated=on, helper text=off, trailing icon=on */

    /* Auto layout */

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 4px;

    position: absolute;
    width: 328px;
    height: 56px;
    left: 0px;
    top: 400px;
  `;

  const InputText = styled.Text`
    /* text field */

    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 16px;
    gap: 12px;

    width: 328px;
    height: 56px;

    /* Black/38% */

    border: 1px solid rgba(0, 0, 0, 0.38);
    border-radius: 4px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  `;

  return (
    <InputTextContainer onPress={onPress}>
      <InputText>{title}</InputText>
    </InputTextContainer>
  );
}
