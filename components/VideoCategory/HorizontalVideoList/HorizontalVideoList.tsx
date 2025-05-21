import { FlatList, View, Image, Text, TouchableOpacity } from 'react-native';
import { Video } from '@/api/types';
import { horizontalVideoListStyles } from './HorizontalVideoListStyles';
import React from 'react';
import { displayDate } from '@/utils/displayDate';
import { Category } from '@/components/VideoCategory/VideoCategory';
import { useRouter } from 'expo-router';
import { useSelectedVideo } from '@/context/SelectedVideoContext';

interface HorizontalVideoListProps {
    data: Video[];
    category: Category;
}

export const HorizontalVideoList: React.FC<HorizontalVideoListProps> = ({
    data,
    category,
}) => {
    const { push } = useRouter();
    const { setSelectedVideoId } = useSelectedVideo();

    const displayImage = (category: Category) => {
        switch (category) {
            case Category.react:
                return require('@/assets/images/react-video.png');
            case Category.reactNative:
                return require('@/assets/images/react-native-video.png');
            case Category.typescript:
                return require('@/assets/images/typescript-video.png');
            default:
                return require('@/assets/images/react-native-video.png');
        }
    };

    return (
        <View style={horizontalVideoListStyles.container}>
            <FlatList
                horizontal
                data={data}
                keyExtractor={(item) => item.id.videoId}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            setSelectedVideoId(item.id.videoId);
                            push('/video-details');
                        }}
                        style={horizontalVideoListStyles.card}
                    >
                        <Image
                            source={displayImage(category)}
                            style={horizontalVideoListStyles.image}
                            resizeMode="cover"
                        />
                        <Text
                            style={horizontalVideoListStyles.cardTitle}
                            numberOfLines={2}
                        >
                            {item.snippet.title}
                        </Text>
                        <Text style={horizontalVideoListStyles.cardDate}>
                            {displayDate(item.snippet.publishedAt)}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};
