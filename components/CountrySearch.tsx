import React, { useState } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import Title from './Title';
import Search from './Search';
import { CountrySearchProps } from '../types/types';
import { Colors } from '../styles/colors';

/**
 * Component for the page for searching for cities of a country. 
 * 
 * @component
 * @prop {RouteProp<RootStackParamList, "CountrySearch">} route 
 * @prop {NativeStackNavigationProp<RootStackParamList, "CountrySearch">} navigation used to navigate to  new screen
 * @returns {CountrySearch}
 */
export default function CountrySearch({ route, navigation }: CountrySearchProps) {

    const [searching, setSearching] = useState(false);
    const [incorrectCountry, setIncorrectCountry] = useState(false);
    const [errorText, setErrorText] = useState("");
    const { getCode } = require('country-list');

    /**
     * searches for a country using geonames api based on input country name.
     * @param {string} countryInput country to search for
     */
    const searchCountry = (countryInput: string) => {

        setSearching(true);

        if (countryInput == "") {

            emptyInput()

        } else {

            const code: string = getCode(countryInput);

            // Change maxRows value to decide how many cities that will show when searching on a country.
            fetch(`http://api.geonames.org/searchJSON?country=${code}&orderby=population&maxRows=10&featureClass=p&username=weknowit`)
                .then(response => response.json())
                .then(json => {
                    if (!json.geonames) {
                        throw new Error("Error: Something went wrong with the api call to geonames, check that the username is correct and still valid.");
                    }
                    else if (json.geonames.length == 0) {
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
                    setIncorrectCountry(true);
                    setErrorText("Something went wrong, please try again.")
                })
        }
    }

    /**
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
