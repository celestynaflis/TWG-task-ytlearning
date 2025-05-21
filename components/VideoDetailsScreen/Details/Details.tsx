import { Text, View } from 'react-native';
import { styles } from './DetailsStyles';
import colors from '@/constants/Colors';

import { StatisticsBadge } from '@/components/VideoDetailsScreen/StatisticsBadge/StatisticsBadge';
import ViewsIcon from '@/assets/icons/views-icon.svg';
import LikesIcon from '@/assets/icons/likes-icon.svg';
import { VideoDetails } from '@/api/types';
import React from 'react';

interface Props {
    videoDetails: VideoDetails | undefined;
}

export const Details: React.FC<Props> = ({ videoDetails }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.detailsText]}>Details</Text>
            <Text style={[styles.text, styles.subtitle]}>Description</Text>
            <Text style={[styles.text, styles.descriptionText]}>
                {videoDetails?.description}
            </Text>
            <Text style={[styles.text, styles.subtitle]}>Statistics</Text>
            <View style={styles.rowContainer}>
                <StatisticsBadge
                    text={`${videoDetails?.viewCount}  views`}
                    icon={
                        <ViewsIcon
                            width="20"
                            height="20"
                            stroke={colors.white}
                        />
                    }
                />
                <StatisticsBadge
                    text={`${videoDetails?.likeCount}  likes`}
                    icon={
                        <LikesIcon
                            width="20"
                            height="20"
                            stroke={colors.white}
                        />
                    }
                />
            </View>
        </View>
    );
};
