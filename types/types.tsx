import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamList';

export type CitySearchProps = NativeStackScreenProps<RootStackParamList, 'CitySearch'>;
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;
export type CountrySearchProps = NativeStackScreenProps<RootStackParamList, 'CountrySearch'>;
export type CountryResultProps = NativeStackScreenProps<RootStackParamList, 'CountryResult'>;
export type CityResultProps = NativeStackScreenProps<RootStackParamList, 'CityResult'>;

export type CityData = {
    name: string,
    population: number
};

export type CityListProps = {
    cityList: Array<CityData>,
    toCity: (city: string, population: number) => void
};

export type SearchProps = {
    incorrectInput: boolean,
    placeholder: string,
    incorrectText: string,
    search: (input: string) => void,
    setIncorrectInput: (b: boolean) => void
}

export type HomeScreenButtonProps = {
    text: string,
    endpoint: keyof RootStackParamList,
    navigate: (endpoint: keyof RootStackParamList) => void
}

export type SearchButtonProps = {
    onPress: () => void
}

export type TitleProps = {
    title: string
}