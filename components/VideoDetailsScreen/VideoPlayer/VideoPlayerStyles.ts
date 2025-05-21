import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export const videoPlayerStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    backgroundVideo: {
        top: 60,
        width: '100%',
        height: 240,
    },
    videoOverLay: {
        position: 'absolute',
        top: 60,
        width: '100%',
        height: 240,
        backgroundColor: 'rgba(255,255,255,0.25)',
        zIndex: 1,
    },
    videoOverlayOff: {
        backgroundColor: 'transparent',
    },
    controlButton: {
        borderRadius: 100,
        backgroundColor: 'rgba(0,0,0,0.25)',
        width: 32,
        height: 32,
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backControl: {
        position: 'absolute',
        top: 80,
        left: 20,
        bottom: 0,
        right: 0,
    },
    playPauseControl: {
        position: 'absolute',
        top: 160,
        left: width / 2 - 16,
    },
    forwardControl: {
        position: 'absolute',
        top: 160,
        left: width / 2 + 50,
    },
    backwardControl: {
        position: 'absolute',
        top: 160,
        left: width / 2 - 82,
    },
    volumeControl: {
        position: 'absolute',
        top: 80,
        right: 20,
    },
    fullScreenControl: {
        zIndex: 2,
        position: 'absolute',
        top: 260,
        right: 20,
    },
});
