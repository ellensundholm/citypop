import { CityData } from "../types/types";

type RootStackParamList = {
    HomeScreen: undefined;
    CitySearch: undefined;
    CountrySearch: undefined;
    CityResult: { city: string, population: number};
    CountryResult: { cityList: Array<CityData>, country: string};
};

export { RootStackParamList };
