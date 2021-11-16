import React from 'react'
import { StyleSheet, Text, FlatList, ListRenderItem, TouchableHighlight, Platform } from 'react-native'
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
        <TouchableHighlight
            underlayColor={Colors.buttonUnderlay}
            style={[styles.button, styles.shadow]}
            onPress={() => toCity(item.name, item.population)}>
            <Text style={styles.listText}>{item.name}</Text>
        </TouchableHighlight>
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
        marginBottom: 110,
    },
    button: {
        alignItems: "center",
        backgroundColor: Colors.secondary,
        padding: 15,
        margin: 5,
        borderRadius: 3, 
    },
    listText: {
        color: Colors.buttonText,
        textAlign: "center",
        fontSize: 20,
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: Colors.secondary,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
            },
            android: {
                elevation: 3
            },
          }),
    }
})