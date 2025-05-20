import { StyleSheet } from 'react-native';
import colors from '@/constants/Colors';

export const searchScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 100,
        backgroundColor: colors.white,
    },
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '90%',
    },
});
