import { VideoPlayer } from '@/components/VideoDetailsScreen/VideoPlayer';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Text } from '@/components/Themed';
import colors from '@/constants/Colors';
import UserIcon from '@/assets/icons/person-icon.svg';

export const VideoDetailsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.videoTitle}>Video title</Text>
                <View style={styles.rowContainer}>
                    <View style={styles.icon}>
                        <UserIcon
                            width="20px"
                            height="20px"
                            fill={colors.white}
                        />
                    </View>
                    <Text style={styles.channelName}>Channel name</Text>
                </View>
            </ScrollView>
            {/*<VideoPlayer />*/}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    videoTitle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        color: colors.navyBlue,
        textAlign: 'left',
        paddingVertical: 10,
        // paddingHorizontal: 20,
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20,
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.navyBlue,
        borderRadius: 100,
        width: 48,
        height: 48,
    },
    channelName: {
        fontSize: 14,
        color: colors.navyBlue,
        fontFamily: 'Poppins-Bold',
    },
});
