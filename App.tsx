import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import CitySearch from './components/CitySearch';
import CountrySearch from './components/CountrySearch';
import City from './components/City';
import CountryResult from './components/CountryResult';
import { RootStackParamList } from './navigation/RootStackParamList'

/**
 * The app-component, the navigation and different screens located here.
 */

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#8FBC8F",
          },
          headerShadowVisible: false,
          headerTintColor: "#2F4F4F",
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CitySearch" component={CitySearch}/>
        <Stack.Screen name="CountrySearch" component={CountrySearch} options={{ title: "CityPop" }}/>
        <Stack.Screen name="City" component={City} />
        <Stack.Screen name="CountryResult" component={CountryResult} options={{ title: "CityPop" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


