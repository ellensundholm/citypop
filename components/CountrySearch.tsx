import React, { useState } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import Title from './Title';
import Search from './Search';
import { CountrySearchProps } from '../types/types';
import { Colors } from '../styles/colors';

/**
 * Component for the page for searching for a country. Here you can enter a country name and search.
 */

export default function CountrySearch({ route, navigation }: CountrySearchProps) {

    const [searching, setSearching] = useState(false);
    const [incorrectCountry, setIncorrectCountry] = useState(false);
    const [errorText, setErrorText] = useState("");
    const { getCode } = require('country-list');

    /* 
    * Method for saerching for a country using geonames api based on input country name.
    */
    const searchCountry = (countryInput: string) => {

        setSearching(true);

        if (countryInput == "") {
            
            emptyInput()

        } else {

            const code: string = getCode(countryInput);

            fetch(`http://api.geonames.org/searchJSON?country=${code}&maxRows=10&featureClass=p&username=weknowit`)
                .then(response => response.json())
                .then(json => {
                    if (json.geonames.length == 0) {
                        setIncorrectCountry(true);
                        setErrorText("Incorrect input, not a valid country. Try writing the ISO country name.")
                    } else {
                        navigation.navigate('CountryResult', { cityList: json.geonames, country: countryInput })
                    }
                    setSearching(false)
                })
                .catch(error => {
                    console.error(error)
                    setSearching(false)
                })
        }
    }

    /*  
    * Sets the parameters to the correct values if input is empty.
    */
    const emptyInput = () => {

        setErrorText("You must enter a country.")
        setIncorrectCountry(true);
        setSearching(false);

    }

    return (
        <View style={styles.container}>
            <Title title="SEARCH BY COUNTRY"></Title>
            {searching ?
                <View style={styles.container}>
                    <ActivityIndicator size="large" color={Colors.secondary} />
                </View>
                :
                <Search
                    placeholder="Enter a country"
                    incorrectInput={incorrectCountry}
                    incorrectText={errorText}
                    search={searchCountry}
                    setIncorrectInput={setIncorrectCountry}
                />
            }
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
});
