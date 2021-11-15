import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { SearchProps } from '../types/types';
import SearchButton from './SearchButton';

/* 
* Search component. Handle textinput on search pages.
* Props:
* incorrectInput:  showing if input is correct or not (boolean)
* incorrectText: text to be shown if incorrect input (string)
* placeholder: placeholder in TextInput (string
* search: function for searching for the input ((input: string) => void)
* setIncorrectInput: setter for incorrectInput  ((b: boolean) => void)
*/

export default function Search({ incorrectInput, placeholder, incorrectText, search, setIncorrectInput }: SearchProps) {

    const [input, setInput] = useState("");

    /* 
     * Method for searching based in input state and resetting the input state to empty.
     */
    const searchInput = () => {
        search(input)
        setInput("")
    }

    return (
        <View>
            <View style={styles.textinputContainer}>
                <TextInput value={input}
                    onChangeText={(text) => {
                        setInput(text)
                        setIncorrectInput(false)
                    }}
                    style={styles.textinput}
                    placeholder={placeholder} />
            </View>
            <SearchButton onPress={searchInput} />
            {incorrectInput ?
                <Text style={styles.incorrectText}>{incorrectText}</Text>
                :
                <View />
            }
        </View>
    )
}
const styles = StyleSheet.create({

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