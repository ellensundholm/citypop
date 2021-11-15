import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, ActivityIndicator } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamList';

import Title from './Title';
import SearchButton from './SearchButton';

/**
 * Component for the page for searching for a country. Here you can enter a country name and search.
 */

type Props = NativeStackScreenProps<RootStackParamList, 'CountrySearch'>;

export default function CountrySearch({ route, navigation }: Props) {

    const [countryInput, setCountryInput] = useState("");
    const [searching, setSearching] = useState(false);
    const [incorrectCountry, setIncorrectCountry] = useState(false);
    const { getCode } = require('country-list');


    /* 
    * Method for saerching for a country using geonames api based on input country name.
    */
    const searchCountry = () => {

        setSearching(true)
        const code: string = getCode(countryInput)

        fetch(`http://api.geonames.org/searchJSON?country=${code}&maxRows=10&featureClass=p&username=weknowit`)
            .then(response => response.json())
            .then(json => {
                if (json.geonames.length == 0) {
                    setIncorrectCountry(true);
                } else {
                    navigation.navigate('CountryResult', { cityList: json.geonames, country: countryInput })
                }
                setSearching(false)
            })
            .catch(error => {
                // TODO: Error-handling.
                console.log(error)
            })
        setCountryInput("")
    }

    return (
        <View style={styles.container}>
            <Title title="SEARCH BY COUNTRY"></Title>
            {searching ?
                <View style={styles.container}>
                    <ActivityIndicator color="#2F4F4F" />
                </View>
                :
                <View>
                    <View style={styles.textinputContainer}>
                        <TextInput value={countryInput}
                            onChangeText={(text) => {
                                setCountryInput(text)
                                setIncorrectCountry(false)
                            }}
                            style={styles.textinput}
                            placeholder="Enter a country" />
                        <SearchButton onPress={searchCountry} />
                    </View>
                    {incorrectCountry ?
                        <Text style={styles.incorrectText}>Incorrect input, not a valid country. Try writing the ISO country name.</Text>
                        :
                        <View />
                    }
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
    incorrectText: {
        color: "#8b0000",
        textAlign: "center"
    }
});
