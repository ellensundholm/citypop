import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';
import { SearchButtonProps } from '../types/types';

/* 
* SearchButton component.
* onPress: function to be called when pressed (onPress: () => void)
*/

export default function SearchButton({onPress}: SearchButtonProps) {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.searchButton}
                onPress={onPress}>
                <Icon color="#8FBC8F" name="search"></Icon>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    
    searchButton: {
        justifyContent: "center",
        backgroundColor: "#2F4F4F",
        width: 50,
        height: 50,
        borderRadius: 100
    },
    buttonContainer: {
        alignItems: "center",
        margin: 10
    },
});