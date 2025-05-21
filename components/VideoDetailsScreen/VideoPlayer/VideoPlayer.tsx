import Video, { VideoRef } from 'react-native-video';
import { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import ArrowIcon from '@/assets/icons/leftarrow-icon.svg';
import colors from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import styles from './VideoPlayerStyles';

export const VideoPlayer = () => {
    const videoRef = useRef<VideoRef>(null);
    const background = require('@/assets/video/broadchurch.mp4');

    const navigation = useNavigation();

    return (
        <>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}
            >
                <ArrowIcon width="20" height="20" stroke={colors.white} />
            </TouchableOpacity>
            <Video
                source={background}
                ref={videoRef}
                style={styles.backgroundVideo}
                controls={true}
                resizeMode="contain"
            />
        </>
    );
};
