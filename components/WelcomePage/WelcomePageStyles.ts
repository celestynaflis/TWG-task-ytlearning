import {StyleSheet} from "react-native";
import colors from "@/constants/Colors";

export const welcomePageStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundBlue,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});