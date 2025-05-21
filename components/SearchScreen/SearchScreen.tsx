import { SafeAreaView, ScrollView, View } from 'react-native';
import { searchScreenStyles } from './SearchScreenStyles';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import { searchVideos } from '@/api/youtubeApi';
import { useEffect, useState } from 'react';
import { Video } from '@/api/types';
import { useSearchQuery } from '@/context/SearchQueryContext';
import { mockVideosData } from '@/mockedData/mockedVideosData';
import { SearchResultsList } from '@/components/SearchResultsList/SearchResultsList';

export const SearchScreen = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const { searchQuery } = useSearchQuery();

    useEffect(() => {
        const fetchVideos = async () => {
            // const results = await searchVideos(searchQuery);
            const results = mockVideosData;
            setVideos(results);
        };
        fetchVideos();
    }, [searchQuery]);

    return (
        <SafeAreaView style={searchScreenStyles.container}>
            <View style={searchScreenStyles.searchContainer}>
                <SearchInput />
            </View>
            <SearchResultsList data={videos} />
        </SafeAreaView>
    );
};
