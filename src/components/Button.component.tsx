import React from 'react';
import { iButton } from '../Interfaces/Interfaces';
import styled from 'styled-components/native';

export default function ButtonComponent({ onPress, bgColor, title}: iButton) {
    const ButtonContainer = styled.TouchableOpacity`
        margin: 8px;
        width: 120px;
        height: 40px;
        padding: 8px;
        border-radius: 5px;
        background-color: ${bgColor}
    `;

    const ButtonText = styled.Text`
        font-size: 16px;
        text-align: center;
    `;

    return (
        <ButtonContainer onPress={onPress} bgColor={bgColor}>
            <ButtonText>{title}</ButtonText>
        </ButtonContainer>
    );

}