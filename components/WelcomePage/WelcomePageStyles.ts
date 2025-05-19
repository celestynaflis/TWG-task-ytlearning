import { StyleSheet } from 'react-native';
import colors from '@/constants/Colors';

export const welcomePageStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,

        backgroundColor: colors.backgroundBlue,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    slogan: {
        fontWeight: 600,
        fontSize: 22,
        lineHeight: 24,
        color: colors.white,
    },
    text: {
        color: colors.white,
        fontSize: 13,
        lineHeight: 16,
        textAlign: 'center',
    },
    link: {
        color: colors.navyBlue,
        textDecorationLine: 'underline',
    },

    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
