import { StyleSheet } from 'react-native';
import colors from '@/constants/Colors';

export const searchInputStyles = StyleSheet.create({
    inputContainer: {
        paddingHorizontal: 20,
        height: 44,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderRadius: 16,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: colors.navyBlue,
        flex: 1,
    },
    searchInput: {
        fontFamily: 'PoppinsRegular',
        backgroundColor: colors.white,
        color: colors.navyBlue,
        flex: 1,
    },
});
