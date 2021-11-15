import { CityData } from '../components/CountryList'


type RootStackParamList = {
    HomeScreen: undefined;
    CitySearch: undefined;
    CountrySearch: undefined;
    CityResult: { city: string, population: number};
    CountryResult: { cityList: Array<CityData>, country: string | undefined};
};


export { RootStackParamList };
