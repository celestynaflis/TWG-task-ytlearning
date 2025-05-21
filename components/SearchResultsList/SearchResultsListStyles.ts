import { StyleSheet } from 'react-native';
import colors from '@/constants/Colors';

export const searchResultsListStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    resultsCounterText: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        color: colors.navyBlue,
    },
    queryText: {
        fontFamily: 'Poppins-SemiBold',
    },
    sortText: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: colors.navyBlue,
        textAlign: 'right',
    },
    sortTextButton: {
        fontFamily: 'Poppins-SemiBold',
    },
});
