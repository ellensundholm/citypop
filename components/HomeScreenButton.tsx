import React from 'react'
import { Text, StyleSheet, TouchableHighlight, Platform } from 'react-native'
import { Colors } from '../styles/colors';
import { HomeScreenButtonProps } from '../types/types';

/* 
Component for the HomeScreenButton.
Props:
text: the text inside the button (string)
navigate: function for navigating to new screen ((endpoint: keyof RootStackParamList) => void)
endpoint: screen to navigate to (string)
*/

export default function HomeScreenButton({ text, navigate, endpoint }: HomeScreenButtonProps) {
    return (
        <TouchableHighlight
            underlayColor={Colors.buttonUnderlay}
            style={[styles.button, styles.shadow]}
            onPress={() => navigate(endpoint)}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({

    button: {
        alignItems: "center",
        backgroundColor: Colors.secondary,
        padding: 15,
        margin: 5,
        borderRadius: 3, 
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 16,
        color: Colors.buttonText
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: Colors.secondary,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
            },
            android: {
                elevation: 3
            },
    })},
    
});
