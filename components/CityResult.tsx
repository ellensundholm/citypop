import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamList'
import Title from './Title';

/**
 * Component for the page for the result after searching a city. The population of this city will appear.
 */

type Props = NativeStackScreenProps<RootStackParamList, 'CityResult'>;

export default function CityResult({ route, navigation }: Props) {

    /* Method for converting a number to a string with space as thousand separator. */
    const spaceSeparator = (num: number) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
    }

    return (
        <View style={styles.container}>
            <Title title={route.params.city.toUpperCase()} />
            <View style={styles.populationContainer}>
                <Text style={styles.textColor}>POPULATION</Text>
                <Text style={[styles.populationText, styles.textColor]}>{spaceSeparator(route.params.population)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 15,
        backgroundColor: "#8FBC8F",
    },
    populationContainer: {
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#2F4F4F",
        padding: 5
    },
    populationText: {
        margin: 20,
        fontWeight: "bold",
        fontSize: 30,
    },
    textColor: {
        color: "#2F4F4F"
    }
});

