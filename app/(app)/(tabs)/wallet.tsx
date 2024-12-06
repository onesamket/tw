import { AvatarOrbit } from '@/components/ui/avatar-orbit';
import { Text, View } from 'react-native';

interface Props {

}

export default function Wallet({ }: Props) {
    const PROFILE_IMAGES = [
        'https://randomuser.me/api/portraits/men/32.jpg',
        'https://randomuser.me/api/portraits/women/44.jpg',
        'https://randomuser.me/api/portraits/men/86.jpg',
        'https://randomuser.me/api/portraits/women/63.jpg',
        'https://randomuser.me/api/portraits/men/91.jpg',
        'https://randomuser.me/api/portraits/women/37.jpg',
        'https://randomuser.me/api/portraits/men/75.jpg',
        'https://randomuser.me/api/portraits/women/52.jpg',
    ];
    return (
        <View>
            <Text> Action </Text>
            <AvatarOrbit
                index={0}
                images={PROFILE_IMAGES}
                total={PROFILE_IMAGES.length}
            />
        </View>
    );
}