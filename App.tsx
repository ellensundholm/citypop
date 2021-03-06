import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import CitySearch from './components/CitySearch';
import CountrySearch from './components/CountrySearch';
import CityResult from './components/CityResult';
import CountryResult from './components/CountryResult';
import { RootStackParamList } from './navigation/RootStackParamList'
import { Colors } from './styles/colors';



const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * The App component of citypop. Creates navigation for the different screens.
 * 
 * @returns {App}
 */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerShadowVisible: false,
          headerTintColor: Colors.secondary,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "" }} />
        <Stack.Screen name="CitySearch" component={CitySearch} options={{ title: "CityPop" }} />
        <Stack.Screen name="CountrySearch" component={CountrySearch} options={{ title: "CityPop" }} />
        <Stack.Screen name="CityResult" component={CityResult} options={{ title: "CityPop" }} />
        <Stack.Screen name="CountryResult" component={CountryResult} options={{ title: "CityPop" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

