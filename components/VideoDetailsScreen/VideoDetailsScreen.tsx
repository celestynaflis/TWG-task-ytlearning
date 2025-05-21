import { VideoPlayerWithControls } from '@/components/VideoDetailsScreen/VideoPlayer/VideoPlayerWithControls';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import colors from '@/constants/Colors';
import UserIcon from '@/assets/icons/person-icon.svg';
import { Details } from '@/components/VideoDetailsScreen/Details/Details';
import { useSelectedVideo } from '@/context/SelectedVideoContext';
import { useEffect, useState } from 'react';
import { getVideoDetails } from '@/api/youtubeApi';
import { VideoDetails } from '@/api/types';
import { videoDetailsStyles } from './VideoDetailsScreenStyles';

export const VideoDetailsScreen = () => {
    const { selectedVideoId } = useSelectedVideo();
    const [videoDetails, setVideoDetails] = useState<VideoDetails>();

    useEffect(() => {
        const fetchDetails = async () => {
            const result = await getVideoDetails(selectedVideoId);
            setVideoDetails(result);
        };
        fetchDetails();
    }, [selectedVideoId]);

    return (
        <>
            <VideoPlayerWithControls />
            <SafeAreaView style={videoDetailsStyles.container}>
                <ScrollView style={videoDetailsStyles.scrollContainer}>
                    <Text style={videoDetailsStyles.videoTitle}>
                        {videoDetails?.videoTitle}
                    </Text>
                    <View style={videoDetailsStyles.rowContainer}>
                        <View style={videoDetailsStyles.icon}>
                            <UserIcon
                                width="20px"
                                height="20px"
                                fill={colors.white}
                            />
                        </View>
                        <Text style={videoDetailsStyles.channelName}>
                            {videoDetails?.channelTitle}
                        </Text>
                    </View>
                    <Details videoDetails={videoDetails} />
                </ScrollView>
            </SafeAreaView>
        </>
    );
};
