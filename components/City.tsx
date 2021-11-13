import React from 'react'
import { View, Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamList'

/**
 * Component for the page for the result after searching a city. The population of this city will appear.
 */

type Props = NativeStackScreenProps<RootStackParamList, 'City'>;

export default function City({ route, navigation }: Props) {
    return (
        <View>
            <Text>City</Text>
        </View>
    )
}
