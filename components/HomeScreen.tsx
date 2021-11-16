import React from 'react'
import { StyleSheet, View } from 'react-native'
import { RootStackParamList } from '../navigation/RootStackParamList'
import Title from './Title'
import HomeScreenButton from './HomeScreenButton';
import { HomeScreenProps } from '../types/types';
import { Colors } from '../styles/colors';

/**
 * Component for the homescreen of citypop. Here you can choose to search on city or country.
 */

export default function HomeScreen({ route, navigation }: HomeScreenProps) {

    /* 
     * Function for navigating to new screen based on which button pressed.
     * endpoint: screen to navigate to 
     */
    const navigateTo = (endpoint: keyof RootStackParamList) => {
        navigation.navigate(endpoint)
    }

    return (
        <View style={styles.container}>
            <Title title="CityPop"></Title>
            <HomeScreenButton
                text="SEARCH BY COUNTRY"
                navigate={navigateTo}
                endpoint="CountrySearch"
            />
            <HomeScreenButton
            text="SEARCH BY CITY"
            navigate={navigateTo}
            endpoint="CitySearch"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        paddingHorizontal: 15,
        backgroundColor: Colors.primary,
    }
});
