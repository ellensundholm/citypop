import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamList';
import { Icon } from 'react-native-elements';

/**
 * Component for the page for searching for a country. Here you can enter a country name and search.
 */

type Props = NativeStackScreenProps<RootStackParamList, 'CountrySearch'>;

export default function CountrySearch({ route, navigation }: Props) {

    const [countryInput, setCountryInput] = useState<string | undefined>(undefined);
    const [searching, setSearching] = useState(false);
    const [incorrectCountry, setIncorrectCountry] = useState(false);
    const { getCode } = require('country-list');


    const searchCountry = () => {

        setSearching(true)
        const code: string = getCode(countryInput)

        fetch(`http://api.geonames.org/searchJSON?country=${code}&maxRows=10&featureClass=p&username=weknowit`)
            .then(response => response.json())
            .then(json => {
                if (json.geonames.length == 0) {
                    setIncorrectCountry(true);
                } else {
                    navigation.navigate('CountryResult', { cityList: json.geonames })
                }
                setSearching(false)
            })
            .catch(error => {
                // TODO: Error-handling.
                console.log(error)
            })
        setCountryInput(undefined)
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.text}>SEARCH BY COUNTRY</Text>
            </View>
            {searching ?
                <View style={styles.container}>
                    <ActivityIndicator color="#2F4F4F" />
                </View>
                :
                <View>
                    <View style={styles.textinputContainer}>
                        <TextInput value={countryInput} onChangeText={(text) => {
                            setCountryInput(text)
                            setIncorrectCountry(false)
                        }} style={styles.textinput} placeholder="Enter a country">
                        </TextInput>
                    </View>
                    {incorrectCountry ?
                        <Text style={styles.incorrectText}>Incorrect input, not a valid country. Try writing the ISO country name.</Text>
                        :
                        <View></View>
                    }
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.searchButton}
                            onPress={searchCountry}>
                            <Icon color="#8FBC8F" name="search"></Icon>
                        </TouchableOpacity>
                    </View>
                </View>
            }
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
    searchButton: {
        justifyContent: "center",
        backgroundColor: "#2F4F4F",
        width: 50,
        height: 50,
        borderRadius: 100
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#ffff"
    },
    textinput: {
        backgroundColor: "#ffff",
        padding: 10,
        width: "100%",
        textAlign: "center",
    },
    textinputContainer: {
        alignItems: "center",
        borderColor: "#2F4F4F",
        borderWidth: 1
    },
    buttonContainer: {
        alignItems: "center",
        margin: 10
    },
    titleContainer: {
        alignItems: "center",
        marginBottom: 100
    },
    text: {
        fontWeight: "bold",
        fontSize: 35,
        color: "#2F4F4F",
        textAlign: "center"
    },
    incorrectText: {
        color: "#8b0000",
        textAlign: "center"
    }
});
