import { SettingsButton } from '@/components/HomeScreen/SettingsButton';
import { homeScreenStyles } from './HomeScreenStyles';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import { View } from 'react-native';

export const HomeScreen = () => {
    return (
        <View style={homeScreenStyles.container}>
            <View style={homeScreenStyles.searchContainer}>
                <SearchInput />
                <SettingsButton />
            </View>
        </View>
    );
};
