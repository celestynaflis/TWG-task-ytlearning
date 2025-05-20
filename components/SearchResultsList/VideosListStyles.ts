import { StyleSheet } from 'react-native';
import colors from '@/constants/Colors';

export const videosListStyles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 20,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 16,
    },
    videoTitle: {
        marginTop: 10,
        fontSize: 12,
        fontWeight: 700,
        color: colors.navyBlue,
    },
    videoDescription: {
        marginTop: 10,
        fontSize: 12,
        fontWeight: 400,
        color: colors.navyBlue,
    },
    cardDate: {
        fontWeight: 400,
        fontSize: 10,
        color: colors.navyBlue,
        marginTop: 6,
        textAlign: 'right',
    },
});
