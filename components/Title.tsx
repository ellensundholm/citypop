import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Colors } from '../styles/colors';
import { TitleProps } from '../types/types';

/* 
Component for the title of the different pages.
Props:
title: string
*/

export default function Title({title}: TitleProps) {
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
        color: Colors.secondary,
        textAlign: "center"
    }
});
