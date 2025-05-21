import { StyleSheet } from 'react-native';
import colors from '@/constants/Colors';

export const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '85%',
        backgroundColor: colors.backgroundBlue,
        borderRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 25,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        color: colors.white,
        marginBottom: 20,
    },
    optionRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    radioOuter: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    radioInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.navyBlue,
    },
    optionLabel: {
        color: colors.white,
        fontSize: 14,
    },
    confirmButton: {
        marginTop: 30,
        backgroundColor: colors.navyBlue,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    confirmText: {
        color: colors.white,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
    },
});
