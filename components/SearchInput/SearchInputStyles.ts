import { StyleSheet } from 'react-native';
import colors from '@/constants/Colors';

export const searchInputStyles = StyleSheet.create({
    inputContainer: {
        paddingHorizontal: 20,
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        borderRadius: 16,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: colors.navyBlue,
        width: '100%',
    },
    searchInput: {
        fontFamily: 'PoppinsRegular',
        backgroundColor: colors.white,
        color: colors.navyBlue,
        flex: 1,
    },
});
