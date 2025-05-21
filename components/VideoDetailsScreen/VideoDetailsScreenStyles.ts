import { StyleSheet } from 'react-native';
import colors from '@/constants/Colors';

export const videoDetailsStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 70,
    },
    scrollContainer: {
        paddingHorizontal: 20,
    },
    videoTitle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        color: colors.navyBlue,
        textAlign: 'left',
        paddingVertical: 10,
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20,
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.navyBlue,
        borderRadius: 100,
        width: 48,
        height: 48,
    },
    channelName: {
        fontSize: 14,
        color: colors.navyBlue,
        fontFamily: 'Poppins-Bold',
    },
    detailsText: {
        fontSize: 12,
        color: colors.navyBlue,
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
        paddingTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.navyBlue,
    },
});
