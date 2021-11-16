import React, { useState } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import Title from './Title';
import Search from './Search';
import { CitySearchProps } from '../types/types';
import { Colors } from '../styles/colors';

/**
 * Component for the page for searching for a city. 
 * Props:
 * route: RouteProp<RootStackParamList, "CitySearch">
 * navigation: NativeStackNavigationProp<RootStackParamList, "CitySearch">
 */

export default function CitySearch({ route, navigation }: CitySearchProps) {

    const [searching, setSearching] = useState(false);
    const [incorrectCity, setIncorrectCity] = useState(false);
    const [errorText, setErrorText] = useState("");

    /* 
    * Method for saerching for a city using geonames api based on input city name.
    * cityInput: the name of the city to search for (string)
    */
    const searchCity = (cityInput: string) => {

        setSearching(true)

        if (cityInput == "") {

            emptyInput()

        } else {

            fetch(`http://api.geonames.org/searchJSON?name_equals=${cityInput}&orderby=population&featureClass=p&username=weknowit`)
                .then(response => response.json())
                .then(json => {
                    if (!json.geonames) {
                        throw new Error("Error: Something went wrong with the api call to geonames, check that the username is correct and still valid.");
                    }
                    else if (json.geonames.length == 0) {
                        setIncorrectCity(true);
                        setErrorText("Incorrect input, not a valid city. Try writing the ISO city name.")
                    } else {
                        navigation.navigate('CityResult', { city: json.geonames[0].name, population: json.geonames[0].population });
                    }
                    setSearching(false);
                })
                .catch(error => {
                    console.error(error);
                    setSearching(false);
                    setIncorrectCity(true);
                    setErrorText("Something went wrong, please try again.")
                });
        }
    }

    /*  
    * Sets the parameters to the correct values if input is empty.
    */
    const emptyInput = () => {
        setIncorrectCity(true);
        setErrorText("You must enter a city.");
        setSearching(false);
    }

    return (
        <View style={styles.container}>
            <Title title="SEARCH BY CITY"></Title>
            {searching ?
                <View style={styles.container}>
                    <ActivityIndicator size="large" color={Colors.secondary} />
                </View>
                :
                <Search
                    incorrectInput={incorrectCity}
                    placeholder="Enter a city"
                    incorrectText={errorText}
                    search={searchCity}
                    setIncorrectInput={setIncorrectCity}
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
