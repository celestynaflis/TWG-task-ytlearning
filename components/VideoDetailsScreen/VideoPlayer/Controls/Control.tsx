import {
    TouchableOpacity,
    StyleProp,
    ViewStyle,
    StyleSheet,
} from 'react-native';
import React from 'react';

interface Props {
    onPress: () => void;
    icon: React.ReactElement;
    style?: StyleProp<ViewStyle>;
}

export const Control: React.FC<Props> = ({ onPress, icon, style }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[videoPlayerStyles.controlButton, style]}
        >
            <>{icon}</>
        </TouchableOpacity>
    );
};

export const videoPlayerStyles = StyleSheet.create({
    controlButton: {
        borderRadius: 100,
        backgroundColor: 'rgba(0,0,0,0.25)',
        width: 32,
        height: 32,
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
