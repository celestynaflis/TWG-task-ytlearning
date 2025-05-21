// Load the module
import Video, { VideoRef } from 'react-native-video';
import { useRef, useState } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Text } from '@/components/Themed';

// Inside your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if needed.

export const VideoPlayer = () => {
    const videoRef = useRef<VideoRef>(null);
    const background = require('@/assets/video/broadchurch.mp4');

    const [paused, setPaused] = useState(true);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const onLoad = (data: any) => {
        setDuration(data.duration);
    };

    const onProgress = (data: any) => {
        setCurrentTime(data.currentTime);
    };

    return (
        <>
            <Video
                // Can be a URL or a local file.
                source={background}
                // Store reference
                ref={videoRef}
                // Callback when remote video is buffering
                // onBuffer={onBuffer}
                // Callback when the video cannot be loaded
                // onError={onError}
                style={styles.backgroundVideo}
                // paused={paused}
                // onLoad={onLoad}
                // onProgress={onProgress}
                resizeMode="contain"
            />
        </>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    backgroundVideo: {
        // position: 'absolute',
        // top: 60,
        // left: 0,
        // bottom: 0,
        // right: 0,
        // display: 'flex',
        // flex: 1,
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'flex-start',
        width: '100%',
        height: 240,
        // backgroundColor: 'black',
    },
});
