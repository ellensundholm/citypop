import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { HomeScreenButtonProps } from '../types/types';

/* 
Component for the HomeScreenButton.
Props:
text: the text inside the button (string)
navigate: function for navigating to new screen ((endpoint: keyof RootStackParamList) => void)
endpoint: screen to navigate to (string)
*/

export default function HomeScreenButton({text, navigate, endpoint}: HomeScreenButtonProps) {
    return (
        <TouchableOpacity
                style={styles.button}
                onPress={() => navigate(endpoint)}>
                <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    button: {
        alignItems: "center",
        backgroundColor: "#2F4F4F",
        padding: 15,
        margin: 5,

    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#ffff"
    }
});
