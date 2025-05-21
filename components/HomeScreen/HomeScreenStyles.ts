import { StyleSheet } from 'react-native';
import colors from '@/constants/Colors';

export const homeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.white,
        paddingTop: 60,
    },
    searchContainer: {
        paddingHorizontal: 20,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: 44,
        marginBottom: 10,
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        flex: 1,
        width: '100%',
    },
});
