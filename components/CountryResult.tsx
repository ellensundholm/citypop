import React from 'react'
import { View, Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamList'

/**
 * Component for the page for the result after searching a country. The largest cities of this country will appear.
 */

type Props = NativeStackScreenProps<RootStackParamList, 'CountryResult'>;

export default function CountryResult({ route, navigation }: Props) {
    return (
        <View>
            <Text>countryresult</Text>
        </View>
    )
}