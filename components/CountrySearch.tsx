import React from 'react'
import { View, Text, Button } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStackParamList'


/**
 * Component for the page for searching for a country. Here you can enter a country name and search.
 */

type Props = NativeStackScreenProps<RootStackParamList, 'CountrySearch'>;

export default function CountrySearch({route, navigation}: Props) {
    return (
        <View>
            <Text>countrysearch</Text>
        </View>
    )
}
