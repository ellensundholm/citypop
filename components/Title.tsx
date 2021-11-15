import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

/* 
Component for the title of the different pages.
Props:
title: string
*/

type Props = {
    title: string
}
export default function Title({title}: Props) {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({

    titleContainer: {
        alignItems: "center",
        marginBottom: 100
       
    },
    title: {
        fontWeight: "bold",
        fontSize: 35,
        color: "#2F4F4F",
        textAlign: "center"
    }
});
