import { View, TextInput } from 'react-native';
import { searchInputStyles } from './SearchInputStyles';
import SearchIcon from '@/assets/icons/search-icon.svg';
import colors from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { useSearchQuery } from '@/context/SearchQueryContext';

export const SearchInput = () => {
    const { push } = useRouter();

    const { query, setQuery } = useSearchQuery();

    return (
        <View style={searchInputStyles.inputContainer}>
            <SearchIcon stroke={colors.navyBlue} width={24} height={24} />
            <TextInput
                value={query}
                onChange={(event) => {
                    setQuery(event.nativeEvent.text);
                }}
                style={searchInputStyles.searchInput}
                placeholder="Search videos"
                onEndEditing={() => push('/(tabs)/search')}
            />
        </View>
    );
};
