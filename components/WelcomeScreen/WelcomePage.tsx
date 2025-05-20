import { View } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { welcomePageStyles } from '@/components/WelcomeScreen/WelcomePageStyles';
import { Text } from '@/components/Themed';
import Logo from '@/assets/images/logo.svg';
import AppIcon from '@/assets/icons/app-icon.svg';
import { ActionButton } from '@/components/ActionButton/ActionButton';

export const WelcomePage = () => {
    const { push } = useRouter();
    return (
        <View style={welcomePageStyles.container}>
            <Logo />
            <AppIcon />
            <Text style={welcomePageStyles.slogan}>
                Welcome to the best YouTube-based learning application.
            </Text>
            <ActionButton
                text="Login as guest"
                onPress={() => {
                    push('/(tabs)/home');
                }}
            />
            <Text style={welcomePageStyles.text}>
                By continuing you agree with{' '}
                <Link style={welcomePageStyles.link} href="/">
                    Terms and Conditions
                </Link>{' '}
                and{' '}
                <Link style={welcomePageStyles.link} href="/">
                    Privacy Policy
                </Link>
            </Text>
        </View>
    );
};
