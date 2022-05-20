import React from 'react';
import { Text } from 'react-native';
import { Styles } from '../Styles';
import { iLink } from '../Interfaces/Interfaces';

export default function LinkComponent({ strLink }: iLink) {

    return (
        <Text
            accessibilityRole="link"
            style={Styles.link}>
            { strLink }
        </Text>
    );

}