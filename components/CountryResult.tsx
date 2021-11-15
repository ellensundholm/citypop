import React from 'react'
import { StyleSheet, View, Text, } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamList'
import CityList from './CityList';

/**
* Component for the page for the result after searching a country. The largest cities of this country will appear. 
* Props: 
* route: RouteProp<RootStackParamList, "CountryResult">
* navigation: NativeStackNavigationProp<RootStackParamList, "CountryResult">
*/

type Props = NativeStackScreenProps<RootStackParamList, 'CountryResult'>;

export default function CountryResult({ route, navigation }: Props) {
    /**
    * Function for navigating to the CityResult component when a city button in CityList is pressed.
    */ 
    const navigateToCity = (city: string, population: number) => {
        navigation.navigate('CityResult', {city: city, population: population})
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.text}>{route.params.country?.toUpperCase()}</Text>
            </View>
            <CityList cityList={route.params.cityList} toCity={navigateToCity}></CityList>
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
    title: {
        fontSize: 32,
    },
    titleContainer: {
        alignItems: "center",
        marginBottom: 100,
        marginTop: 50
    },
    text: {
        fontWeight: "bold",
        fontSize: 35,
        color: "#2F4F4F",
        textAlign: "center"
    },
});
