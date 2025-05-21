import { StyleSheet } from 'react-native';
import colors from '@/constants/Colors';

export const actionButtonStyles = StyleSheet.create({
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.navyBlue,
        color: colors.white,
        borderRadius: 10,
        padding: 12,
        minWidth: '60%',
        maxWidth: '90%',
    },
    buttonText: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Poppins-SemiBold',
        // fontFamily: 'Poppins-SemiBold',,
    },
});
