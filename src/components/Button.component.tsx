import React from "react";
import { iComponent } from "../Interfaces/Interfaces";
import styled from "styled-components/native";

export default function ButtonComponent({ onPress, title }: iComponent) {
  const ButtonContainer = styled.TouchableOpacity`
    /* Type=Raised, Leading icon=False, stretch=False */

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 16px;
    gap: 8px;

    position: absolute;
    width: 88px;
    height: 36px;
    left: 0px;
    top: 156px;

    /* Primary/100% */

    background: #6200e8;
    /* 2 */

    box-shadow: 0px 0.3px 0.5px rgba(0, 0, 0, 0.1),
      0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  `;

  const ButtonText = styled.Text`
    /* text label */

    width: 56px;
    height: 24px;

    /* Button (14 24) */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.01em;
    text-transform: uppercase;

    /* White/100% */

    color: #ffffff;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  `;

  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
