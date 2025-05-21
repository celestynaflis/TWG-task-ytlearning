import { StyleSheet } from 'react-native';
import colors from '@/constants/Colors';

export const badgeStyles = StyleSheet.create({
    badge: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.navyBlue,
        paddingVertical: 5,
        paddingHorizontal: 20,
        gap: 10,
        borderRadius: 8,
    },
    text: {
        color: colors.white,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
    },
});
