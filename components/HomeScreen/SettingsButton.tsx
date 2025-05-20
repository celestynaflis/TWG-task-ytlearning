import { TouchableOpacity } from 'react-native';
import SettingsIcon from '@/assets/icons/settings-icon.svg';
import { useRouter } from 'expo-router';

export const SettingsButton = () => {
    const { push } = useRouter();

    return (
        <TouchableOpacity onPress={() => push('/settings')}>
            <SettingsIcon />
        </TouchableOpacity>
    );
};
