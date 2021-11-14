import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamList';
import { Icon } from 'react-native-elements';


/**
 * Component for the page for searching for a country. Here you can enter a country name and search.
 */

type Props = NativeStackScreenProps<RootStackParamList, 'CountrySearch'>;

export default function CountrySearch({ route, navigation }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.text}>SEARCH BY COUNTRY</Text>
            </View>
            <View style={styles.textinputContainer}>
                <TextInput style={styles.textinput} placeholder="Enter a country"></TextInput>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.searchButton}
                    onPress={() =>
                        navigation.navigate('Country')
                    }>
                    <Icon color="#8FBC8F" name="search"></Icon>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
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
        padding: 10,
    },
    titleContainer: {
        alignItems: "center",
        padding: 10,
        marginBottom: 100
    },
    text: {
        fontWeight: "bold",
        fontSize: 35,
        color: "#2F4F4F",
        textAlign: "center"
    },
});
