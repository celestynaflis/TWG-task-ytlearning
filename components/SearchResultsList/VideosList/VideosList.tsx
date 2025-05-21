import { FlatList, Image, TouchableOpacity, Text } from 'react-native';
import { videosListStyles } from './VideosListStyles';
import React from 'react';
import { Video } from '@/api/types';
import { displayDate } from '@/utils/displayDate';
import { useRouter } from 'expo-router';
import { useSelectedVideo } from '@/context/SelectedVideoContext';

interface VideosListProps {
    data: Video[];
    listHeader: React.ReactElement;
}

export const VideosList: React.FC<VideosListProps> = ({ data, listHeader }) => {
    const { push } = useRouter();
    const { setSelectedVideoId } = useSelectedVideo();
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.videoId}
            ListHeaderComponent={listHeader}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => {
                        setSelectedVideoId(item.id.videoId);
                        push('/video-details');
                    }}
                    style={videosListStyles.container}
                >
                    <Image
                        source={require('@/assets/images/react-native-video.png')}
                        style={videosListStyles.image}
                        resizeMode="cover"
                    />
                    <Text style={videosListStyles.videoTitle} numberOfLines={2}>
                        {item.snippet.title}
                    </Text>
                    <Text
                        style={videosListStyles.videoDescription}
                        numberOfLines={2}
                    >
                        {item.snippet.description}
                    </Text>
                    <Text style={videosListStyles.cardDate}>
                        {displayDate(item.snippet.publishedAt)}
                    </Text>
                </TouchableOpacity>
            )}
        />
    );
};
