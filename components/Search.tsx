import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { Colors } from '../styles/colors';
import { SearchProps } from '../types/types';
import SearchButton from './SearchButton';


/**
 * 
 * @prop {boolean} incorrectInput bool if incorrect input or not
 * @prop {string} placeholder the text to have as aplaceholder in TextInput
 * @prop {string} incorrectText the text to show when incorrect input
 * @prop {(input: string) => void} search function to search for input
 * @prop {(b: boolean) => void} setIncorrectInput sets the input to incorrect 
 * @returns {Search}
 */
export default function Search({ incorrectInput, placeholder, incorrectText, search, setIncorrectInput }: SearchProps) {

    const [input, setInput] = useState("");

    /* 
     * Method for searching based in input state and resetting the input state to empty.
     */
    const searchInput = () => {
        search(input.trim())
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
            {incorrectInput ?
                <Text style={styles.incorrectText}>{incorrectText}</Text>
                :
                <View />
            }
            <SearchButton onPress={searchInput} />
        </View>
    )
}
const styles = StyleSheet.create({

    textinput: {
        backgroundColor: Colors.textInputBackground,
        padding: 10,
        width: "100%",
        textAlign: "center"
    },
    textinputContainer: {
        borderColor: Colors.secondary,
        borderWidth: 1,
        elevation: 2,
        marginBottom: 10
    },
    incorrectText: {
        color: Colors.error,
        textAlign: "center"
    }
});