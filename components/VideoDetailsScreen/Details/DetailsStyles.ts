import { StyleSheet } from 'react-native';
import colors from '@/constants/Colors';

export const styles = StyleSheet.create({
    container: {
        paddingBottom: 60,
    },
    text: {
        color: colors.navyBlue,
        fontFamily: 'Poppins-SemiBold',
    },
    detailsText: {
        fontSize: 12,
        textAlign: 'center',
        paddingTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.navyBlue,
    },
    subtitle: {
        fontSize: 10,
        paddingVertical: 10,
    },
    descriptionText: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
    },
});
