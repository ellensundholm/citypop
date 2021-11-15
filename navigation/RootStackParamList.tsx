import { CountryData } from '../components/CountryResult'


type RootStackParamList = {
    HomeScreen: undefined;
    CitySearch: undefined;
    CountrySearch: undefined;
    City: undefined;
    CountryResult: { cityList: Array<CountryData>, country: string | undefined};
};


export { RootStackParamList };
