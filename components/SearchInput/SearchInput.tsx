import { View, TextInput } from 'react-native';
import { searchInputStyles } from './SearchInputStyles';
import SearchIcon from '@/assets/icons/search-icon.svg';
import colors from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { useSearchQuery } from '@/context/SearchQueryContext';

export const SearchInput = () => {
    const { push } = useRouter();

    const { searchQuery, setSearchQuery } = useSearchQuery();

    return (
        <View style={searchInputStyles.inputContainer}>
            <SearchIcon stroke={colors.navyBlue} width={24} height={24} />
            <TextInput
                value={searchQuery}
                onChange={(event) => {
                    setSearchQuery(event.nativeEvent.text);
                }}
                style={searchInputStyles.searchInput}
                placeholder="Search videos"
                onSubmitEditing={() => {
                    push('/(tabs)/search');
                }}
            />
        </View>
    );
};
