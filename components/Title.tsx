import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Colors } from '../styles/colors';
import { TitleProps } from '../types/types';

/**
 * Component for the title of the different pages.
 * 
 * @component
 * @prop {string} title the title text
 * @returns {Title}
 */
export default function Title({ title }: TitleProps) {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    titleContainer: {
        alignSelf: "center",
        marginBottom: 90,
        marginTop: 80,
        width: "70%"
    },
    title: {
        fontWeight: "bold",
        fontSize: 35,
        color: Colors.secondary,
        textAlign: "center"
    }
});
