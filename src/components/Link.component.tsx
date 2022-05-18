import React from 'react';
import { Text } from 'react-native';
import { Styles } from '../Styles';
import { Link } from '../Interfaces/Types';

export default function Link({ strLink }: Link) {

    return (
        <Text
            accessibilityRole="link"
            style={Styles.link}>
            { strLink }
        </Text>
    );
    
}