import { SafeAreaView, View } from 'react-native';
import { searchScreenStyles } from './SearchScreenStyles';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import { searchVideos } from '@/api/youtubeApi';
import { useEffect, useState } from 'react';
import { Video } from '@/api/types';
import { useSearchQuery } from '@/context/SearchQueryContext';
import { SearchResultsList } from '@/components/SearchResultsList/SearchResultsList';

export const SearchScreen = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const { searchQuery } = useSearchQuery();

    useEffect(() => {
        if (!searchQuery) {
            setVideos([]);
            return;
        }

        const handler = setTimeout(() => {
            const fetchVideos = async () => {
                const results = await searchVideos(searchQuery);
                setVideos(results);
            };
            fetchVideos();
        }, 1000);

        return () => clearTimeout(handler);
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
