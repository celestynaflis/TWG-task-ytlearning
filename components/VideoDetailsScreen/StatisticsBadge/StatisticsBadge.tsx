import { View, Text } from 'react-native';
import { styles } from './StatisticsBadgeStyles';
import React from 'react';

interface Props {
    text: string;
    icon: React.ReactElement;
}

export const StatisticsBadge: React.FC<Props> = ({ text, icon }) => {
    return (
        <View style={styles.badge}>
            <View>{icon}</View>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};
