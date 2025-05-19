import { TouchableOpacity } from 'react-native';
import React from 'react';
import { actionButtonStyles } from './ActionButtonStyles';
import { Text } from 'react-native';

interface ActionButtonProps {
    text: string;
    onPress: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
    text,
    onPress,
}) => {
    return (
        <TouchableOpacity style={actionButtonStyles.button} onPress={onPress}>
            <Text style={actionButtonStyles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};
