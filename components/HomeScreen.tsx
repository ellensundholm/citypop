import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamList'

/**
 * Component for the homescreen of citypop. Here you can choose to search on city or country.
 */

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export default function HomeScreen({ route, navigation }: Props) {
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('CountrySearch')
                }>
                <Text>Search Country</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('CitySearch')
                }>
                <Text>Search city</Text>
            </TouchableOpacity>


        </View>
    )
}
