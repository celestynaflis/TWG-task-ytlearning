import { StyleSheet } from 'react-native';
import colors from '@/constants/Colors';

export const homeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 100,
        backgroundColor: colors.white,
    },
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        width: '80%',
        paddingHorizontal: 10,
    },
});
