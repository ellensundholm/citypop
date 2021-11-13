import React from 'react'
import { View, Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStackParamList'

/**
 * Component for the page for searching for a city. Here you can enter a city name and search.
 */

type Props = NativeStackScreenProps<RootStackParamList, 'CitySearch'>;

export default function CitySearch({route, navigation}: Props) {
    return (
        <View>
            <Text>CitySearch</Text>
        </View>
    )
}
