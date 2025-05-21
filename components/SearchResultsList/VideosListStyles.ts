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
        fontFamily: 'Poppins-Bold',
        color: colors.navyBlue,
    },
    videoDescription: {
        marginTop: 10,
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: colors.navyBlue,
    },
    cardDate: {
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: colors.navyBlue,
        marginTop: 6,
        textAlign: 'right',
    },
});
