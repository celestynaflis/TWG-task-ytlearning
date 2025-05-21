import { StyleSheet } from 'react-native';
import colors from '@/constants/Colors';

export const searchScreenStyles = StyleSheet.create({
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
        marginBottom: 10,
        height: 44,
    },
});
