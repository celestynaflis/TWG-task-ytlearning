import { SettingsButton } from '@/components/HomeScreen/SettingsButton';
import { homeScreenStyles } from './HomeScreenStyles';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import { SafeAreaView, ScrollView, View } from 'react-native';
import {
    Category,
    VideoCategory,
} from '@/components/VideoCategory/VideoCategory';

export const HomeScreen = () => {
    return (
        <SafeAreaView style={homeScreenStyles.container}>
            <View style={homeScreenStyles.searchContainer}>
                <View style={homeScreenStyles.rowContainer}>
                    <SearchInput />
                    <SettingsButton />
                </View>
            </View>
            <ScrollView>
                <VideoCategory category={Category.reactNative} />
                <VideoCategory category={Category.react} />
                <VideoCategory category={Category.typescript} />
            </ScrollView>
        </SafeAreaView>
    );
};
