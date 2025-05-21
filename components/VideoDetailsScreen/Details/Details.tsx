import { Text, View } from 'react-native';
import { styles } from './DetailsStyles';
import colors from '@/constants/Colors';

import { StatisticsBadge } from '@/components/VideoDetailsScreen/StatisticsBadge/StatisticsBadge';
import ViewsIcon from '@/assets/icons/views-icon.svg';
import LikesIcon from '@/assets/icons/likes-icon.svg';

// TODO - replace static data with API data
export const Details = () => {
    return (
        <>
            <Text style={[styles.text, styles.detailsText]}>Details</Text>
            <Text style={[styles.text, styles.subtitle]}>Description</Text>
            <Text style={[styles.text, styles.descriptionText]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque venenatis semper purus a accumsan. Donec accumsan
                pulvinar metus, euismod lacinia libero congue non. Vivamus ut
                massa finibus, consequat dui commodo, semper magna. Donec nec
                justo consectetur lacus facilisis tristique eget quis nulla.
                Cras sodales lacinia nisi, in dictum elit commodo in.
            </Text>
            <Text style={[styles.text, styles.subtitle]}>Statistics</Text>
            <View style={styles.rowContainer}>
                <StatisticsBadge
                    text="12345 views"
                    icon={
                        <ViewsIcon
                            width="20"
                            height="20"
                            stroke={colors.white}
                        />
                    }
                />
                <StatisticsBadge
                    text="12345 likes"
                    icon={
                        <LikesIcon
                            width="20"
                            height="20"
                            stroke={colors.white}
                        />
                    }
                />
            </View>
        </>
    );
};
