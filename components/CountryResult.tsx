import React from 'react'
import { StyleSheet, View } from 'react-native'
import CityList from './CityList';
import Title from './Title';
import { CountryResultProps } from '../types/types';
import { Colors } from '../styles/colors';

/**
* Component for the page for the result after searching a country. The largest cities of this country will appear. 
* Props: 
* route: RouteProp<RootStackParamList, "CountryResult">
* navigation: NativeStackNavigationProp<RootStackParamList, "CountryResult">
*/

export default function CountryResult({ route, navigation }: CountryResultProps) {
    /**
    * Function for navigating to the CityResult component when a city button in CityList is pressed.
    */
    const navigateToCity = (city: string, population: number) => {
        navigation.navigate('CityResult', { city: city, population: population })
    }

    return (
        <View style={styles.container}>
            <Title title={route.params.country}></Title>
            <CityList cityList={route.params.cityList} toCity={navigateToCity}></CityList>
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
