import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    backgroundVideo: {
        top: 60,
        width: '100%',
        height: 240,
    },
    backButton: {
        position: 'absolute',
        top: 80,
        left: 20,
        bottom: 0,
        right: 0,
        borderRadius: 100,
        backgroundColor: '#00000040',
        width: 32,
        height: 32,
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
