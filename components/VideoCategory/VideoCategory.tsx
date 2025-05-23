import { View, Text } from 'react-native';
import { HorizontalVideoList } from '@/components/VideoCategory/HorizontalVideoList/HorizontalVideoList';
import { Video } from '@/api/types';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { useSearchQuery } from '@/context/SearchQueryContext';
import { videoCategoryStyles } from './VideoCategoryStyles';
import { searchVideos } from '@/api/youtubeApi';

export enum Category {
    reactNative = 'React Native',
    react = 'React',
    typescript = 'TypeScript',
}

interface VideoCategoryProps {
    category: Category;
}

export const VideoCategory: React.FC<VideoCategoryProps> = ({ category }) => {
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const results = await searchVideos(category);
            setVideos(results);
        };

        fetchVideos();
    }, []);

    const { push } = useRouter();
    const { setSearchQuery } = useSearchQuery();

    const onShowMore = () => {
        push('/(tabs)/search');
        setSearchQuery(category);
    };

    return (
        <View>
            <View style={videoCategoryStyles.container}>
                <View style={videoCategoryStyles.titleContainer}>
                    <Text style={videoCategoryStyles.title}>{category}</Text>
                    <Text onPress={onShowMore} style={videoCategoryStyles.link}>
                        Show more
                    </Text>
                </View>
                <HorizontalVideoList data={videos} category={category} />
            </View>
            <View style={videoCategoryStyles.separator} />
        </View>
    );
};
