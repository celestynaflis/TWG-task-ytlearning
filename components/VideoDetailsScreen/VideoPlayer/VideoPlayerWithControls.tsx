import Video, { VideoRef } from 'react-native-video';
import { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import ArrowIcon from '@/assets/icons/leftarrow-icon.svg';
import colors from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { videoPlayerStyles } from './VideoPlayerStyles';
import PlayIcon from '@/assets/icons/play-icon.svg';
import PauseIcon from '@/assets/icons/pause-icon.svg';
import VolumeIcon from '@/assets/icons/volume-icon.svg';
import VolumeOffIcon from '@/assets/icons/volume-off-icon.svg';
import ForwardIcon from '@/assets/icons/forward-icon.svg';
import BackwardIcon from '@/assets/icons/backward-icon.svg';
import FullScreenIcon from '@/assets/icons/fullscreen-icon.svg';
import { Control } from '@/components/VideoDetailsScreen/VideoPlayer/Controls/Control';

export const VideoPlayerWithControls = () => {
    const videoRef = useRef<VideoRef>(null);
    const background = require('@/assets/video/broadchurch.mp4');

    const [paused, setPaused] = useState(false);
    const [muted, setMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [fullScreen, setFullScreen] = useState(false);
    const [tap, setTap] = useState(false);
    const [controlsVisible, setControlsVisible] = useState(true);

    const navigation = useNavigation();

    const handleForward = () => {
        if (videoRef.current) {
            videoRef.current.seek(currentTime + 10);
        }
    };

    const handleBackward = () => {
        if (videoRef.current) {
            videoRef.current.seek(currentTime - 10);
        }
    };

    const getPlayPauseIcon = () => {
        if (paused)
            return <PlayIcon width="20" height="20" stroke={colors.white} />;
        else return <PauseIcon width="20" height="20" stroke={colors.white} />;
    };

    const getVolumeIcon = () => {
        if (muted)
            return <VolumeIcon width="20" height="20" fill={colors.white} />;
        else return <VolumeOffIcon width="20" height="20" />;
    };

    return (
        <>
            <TouchableOpacity
                style={[
                    videoPlayerStyles.videoOverLay,
                    controlsVisible ? '' : videoPlayerStyles.videoOverlayOff,
                ]}
                onPress={() => setControlsVisible(!controlsVisible)}
            />
            <Control
                onPress={() => navigation.goBack()}
                icon={
                    <ArrowIcon width="20" height="20" stroke={colors.white} />
                }
                style={videoPlayerStyles.backControl}
            />
            {controlsVisible && (
                <>
                    <Control
                        onPress={() => setPaused(!paused)}
                        icon={getPlayPauseIcon()}
                        style={videoPlayerStyles.playPauseControl}
                    />
                    <Control
                        onPress={handleForward}
                        icon={
                            <ForwardIcon
                                width="20"
                                height="20"
                                fill={colors.white}
                            />
                        }
                        style={videoPlayerStyles.forwardControl}
                    />
                    <Control
                        onPress={handleBackward}
                        icon={
                            <BackwardIcon
                                width="20"
                                height="20"
                                fill={colors.white}
                            />
                        }
                        style={videoPlayerStyles.backwardControl}
                    />
                    <Control
                        onPress={() => setMuted(!muted)}
                        icon={getVolumeIcon()}
                        style={videoPlayerStyles.volumeControl}
                    />
                    <TouchableOpacity
                        onPress={() => setFullScreen(!fullScreen)}
                        style={videoPlayerStyles.fullScreenControl}
                    >
                        <FullScreenIcon
                            width="24"
                            height="24"
                            stroke={colors.white}
                        />
                    </TouchableOpacity>
                </>
            )}

            <Video
                source={background}
                ref={videoRef}
                style={videoPlayerStyles.backgroundVideo}
                resizeMode="contain"
                paused={paused}
                muted={muted}
                onProgress={(data) => setCurrentTime(data.currentTime)}
                fullscreen={fullScreen}
                onFullscreenPlayerDidDismiss={() => setFullScreen(false)}
                onControlsVisibilityChange={() => setTap(!tap)}
            />
        </>
    );
};
