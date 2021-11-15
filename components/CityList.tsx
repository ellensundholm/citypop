import React from 'react'
import { StyleSheet, Text, FlatList, ListRenderItem, TouchableOpacity } from 'react-native'
import { Colors } from '../styles/colors';
import { CityData, CityListProps } from '../types/types';

/* 
* Component for the list of cities when the user searched a country.
* Props:
* cityList: CityData[]
* toCity: (city: string, population: number) => void
*/

export default function CityList({ cityList, toCity }: CityListProps) {

    const renderCityItem: ListRenderItem<CityData> = ({ item }) => (
        <TouchableOpacity
            style={styles.button}
            onPress={() => toCity(item.name, item.population)}>
            <Text style={styles.listText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <FlatList
            keyExtractor={(item, index) => index.toString()}
            style={styles.list}
            data={cityList}
            renderItem={renderCityItem}
        ></FlatList>
    );
};

const styles = StyleSheet.create({
    list: {
        marginBottom: 50,
        marginTop: 50
    },
    button: {
        alignItems: "center",
        backgroundColor: Colors.secondary,
        padding: 15,
        margin: 5,
    },
    listText: {
        color: Colors.primary,
        textAlign: "center",
        fontSize: 20,
    },
})