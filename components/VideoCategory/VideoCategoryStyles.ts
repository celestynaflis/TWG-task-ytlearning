import { StyleSheet } from 'react-native';
import colors from '@/constants/Colors';

export const videoCategoryStyles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        marginTop: 20,
    },
    titleContainer: {
        paddingBottom: 10,
        marginRight: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    link: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        textDecorationLine: 'underline',
        color: colors.navyBlue,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        color: colors.navyBlue,
    },
    separator: {
        borderBottomColor: colors.navyBlue,
        borderBottomWidth: 2,
    },
});
