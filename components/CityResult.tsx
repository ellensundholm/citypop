import React from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'
import Title from './Title';
import { CityResultProps } from '../types/types';
import { Colors } from '../styles/colors';

/**
 * Component for the page for the result after searching a city. The population of this city will appear.
 */

export default function CityResult({ route, navigation }: CityResultProps) {

    /* Method for converting a number to a string with space as thousand separator. */
    const spaceSeparator = (num: number) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
    }

    return (
        <View style={styles.container}>
            <Title title={route.params.city.toUpperCase()} />
            <View style={[styles.populationContainer, styles.shadow]}>
                <Text style={styles.textColor}>POPULATION</Text>
                <Text style={[styles.populationText, styles.textColor]}>{spaceSeparator(route.params.population)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        paddingHorizontal: 15,
        backgroundColor: Colors.primary,
    },
    populationContainer: {
        alignItems: "center",
        borderWidth: 2,
        borderColor: Colors.secondary,
        padding: 5,
        backgroundColor: Colors.primary,
    },
    populationText: {
        margin: 20,
        fontWeight: "bold",
        fontSize: 30,
    },
    textColor: {
        color: Colors.secondary
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
          }),
    }
});

