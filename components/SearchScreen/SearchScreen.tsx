import { FlatList, View } from 'react-native';
import { searchScreenStyles } from './SearchScreenStyles';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import { searchVideos } from '@/api/youtubeApi';
import { useEffect, useState } from 'react';
import { Text } from '@/components/Themed';
import { Video } from '@/api/types';
import { useSearchQuery } from '@/context/SearchQueryContext';

export const SearchScreen = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const { query } = useSearchQuery();

    useEffect(() => {
        const fetchVideos = async () => {
            const results = await searchVideos(query);
            setVideos(results);
        };

        fetchVideos();
    }, [query]);

    console.log(videos);

    return (
        <View style={searchScreenStyles.container}>
            <View style={searchScreenStyles.searchContainer}>
                <SearchInput />
            </View>
            <FlatList
                data={videos}
                keyExtractor={(item) => item.id.videoId}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.snippet.title}</Text>
                    </View>
                )}
            />
        </View>
    );
};
