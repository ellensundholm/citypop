import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamList'

/**
 * Component for the homescreen of citypop. Here you can choose to search on city or country.
 */

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export default function HomeScreen({ route, navigation }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.welcomeText}>CityPop</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.navigate('CountrySearch')
                }>
                <Text style={styles.buttonText}>SEARCH BY COUNTRY</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.navigate('CitySearch')
                }>
                <Text style={styles.buttonText}>SEARCH BY CITY</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        backgroundColor: "#8FBC8F",

    },
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

    },
    titleContainer: {
        alignItems: "center",
        padding: 10,
        marginBottom: 100
    },
    welcomeText: {
        fontWeight: "bold",
        fontSize: 35,
        color: "#2F4F4F"
    }

});
