import React from 'react'
import { View, Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamList'

/**
 * Component for the page for the result after searching a city. The population of this city will appear.
 */

type Props = NativeStackScreenProps<RootStackParamList, 'CityResult'>;

export default function CityResult({ route, navigation }: Props) {
    return (
        <View>
            <Text>CityResult</Text>
        </View>
    )
}
