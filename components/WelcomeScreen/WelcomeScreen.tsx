import { View, Text } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { welcomeScreenStyles } from '@/components/WelcomeScreen/WelcomeScreenStyles';
import Logo from '@/assets/images/logo.svg';
import AppIcon from '@/assets/icons/app-icon.svg';
import { ActionButton } from '@/components/ActionButton/ActionButton';

export const WelcomeScreen = () => {
    const { push } = useRouter();
    return (
        <View style={welcomeScreenStyles.container}>
            <Logo />
            <AppIcon />
            <Text style={welcomeScreenStyles.slogan}>
                Welcome to the best YouTube-based learning application.
            </Text>
            <ActionButton
                text="Login as guest"
                onPress={() => {
                    push('/(tabs)/home');
                }}
            />
            <Text style={welcomeScreenStyles.text}>
                By continuing you agree with{' '}
                <Link style={welcomeScreenStyles.link} href="/">
                    Terms and Conditions
                </Link>{' '}
                and{' '}
                <Link style={welcomeScreenStyles.link} href="/">
                    Privacy Policy
                </Link>
            </Text>
        </View>
    );
};
