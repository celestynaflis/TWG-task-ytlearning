import { View, Text } from 'react-native';
import { badgeStyles } from './StatisticsBadgeStyles';
import React from 'react';

interface Props {
    text: string;
    icon: React.ReactElement;
}

export const StatisticsBadge: React.FC<Props> = ({ text, icon }) => {
    return (
        <View style={badgeStyles.badge}>
            <View>{icon}</View>
            <Text style={badgeStyles.text}>{text}</Text>
        </View>
    );
};
