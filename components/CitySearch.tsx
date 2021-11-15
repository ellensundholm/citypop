import React, { useState } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import Title from './Title';
import Search from './Search';
import { CitySearchProps } from '../types/types';

/**
 * Component for the page for searching for a city. 
 * Props:
 * route: RouteProp<RootStackParamList, "CitySearch">
 * navigation: NativeStackNavigationProp<RootStackParamList, "CitySearch">
 */

export default function CitySearch({route, navigation}: CitySearchProps) {
    
    const [searching, setSearching] = useState(false);
    const [incorrectCity, setIncorrectCity] = useState(false);

    /* 
    * Method for saerching for a city using geonames api based on input city name.
    * cityInput: the name of the city to search for (string)
    */
    const searchCity = (cityInput: string) => {

        setSearching(true)

        fetch(`http://api.geonames.org/searchJSON?name_equals=${cityInput}&featureClass=p&username=weknowit`)
            .then(response => response.json())
            .then(json => {
                if (json.geonames.length == 0) {
                    setIncorrectCity(true);
                } else {
                    navigation.navigate('CityResult', { city: json.geonames[0].name, population: json.geonames[0].population })
                }
                setSearching(false)
            })
            .catch(error => {
                // TODO: Error-handling.
                console.log(error)
            })
    }

    return (
        <View style={styles.container}>
            <Title title="SEARCH BY CITY"></Title>
            {searching ?
                <View style={styles.container}>
                    <ActivityIndicator color="#2F4F4F" />
                </View>
                :
                <Search 
                incorrectInput={incorrectCity}
                placeholder="Enter a city"
                incorrectText="Incorrect input, not a valid city. Try writing the ISO city name."
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
        justifyContent: "center",
        paddingHorizontal: 15,
        backgroundColor: "#8FBC8F",
    },
});
