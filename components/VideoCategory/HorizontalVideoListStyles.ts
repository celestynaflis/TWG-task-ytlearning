import { StyleSheet } from 'react-native';

export const horizontalVideoListStyles = StyleSheet.create({
    container: {
        height: 180,
    },
    card: {
        width: 180,
        marginRight: 10,
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 12,
    },
    cardTitle: {
        marginTop: 6,
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        color: '#2e2f3e',
    },
    cardDate: {
        fontSize: 10,
        color: '#2B2D42',
        marginTop: 4,
        textAlign: 'right',
    },
});
