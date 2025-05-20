import { FlatList, Image, View } from 'react-native';
import { videosListStyles } from './VideosListStyles';
import { Text } from '@/components/Themed';
import React from 'react';
import { Video } from '@/api/types';
import { displayDate } from '@/utils/displayDate';

interface VideosListProps {
    data: Video[];
}

export const VideosList: React.FC<VideosListProps> = ({ data }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.videoId}
            renderItem={({ item }) => (
                <View style={videosListStyles.container}>
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
                </View>
            )}
        />
    );
};
