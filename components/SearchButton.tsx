import React from 'react'
import { View, StyleSheet, TouchableHighlight, Platform } from 'react-native'
import { Icon } from 'react-native-elements';
import { Colors } from '../styles/colors';
import { SearchButtonProps } from '../types/types';

/* 
* SearchButton component.
* onPress: function to be called when pressed (onPress: () => void)
*/

export default function SearchButton({ onPress }: SearchButtonProps) {
    return (
        <View style={styles.buttonContainer}>
            <TouchableHighlight
                underlayColor={Colors.buttonUnderlay}
                style={[styles.searchButton, styles.shadow]}
                onPress={onPress}>
                <Icon color={Colors.buttonText} name="search"></Icon>
            </TouchableHighlight>
        </View>
    )
}
const styles = StyleSheet.create({

    searchButton: {
        justifyContent: "center",
        backgroundColor: Colors.secondary,
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    buttonContainer: {
        alignItems: "center",
        margin: 10
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