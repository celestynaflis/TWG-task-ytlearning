import { StyleSheet } from 'react-native';
import colors from '@/constants/Colors';

export const searchResultsListStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    resultsCounterText: {
        fontSize: 10,
        fontWeight: 400,
        color: colors.navyBlue,
    },
    queryText: {
        fontWeight: 600,
    },
    sortText: {
        fontSize: 12,
        fontWeight: 400,
        color: colors.navyBlue,
        textAlign: 'right',
    },
    sortTextButton: {
        fontWeight: 600,
    },
});
