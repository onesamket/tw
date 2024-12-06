import { View } from 'react-native';
import { Text } from '@/components/ui/text';
export default function Task() {
    return (
        <View>
            <Text>Default text</Text>


            <Text variant="h1">Main Heading</Text>
            <Text variant="h2">Sub Heading</Text>

            <Text variant="body-lg">Larger body text</Text>
            <Text variant="body-sm">Smaller body text</Text>

            <Text variant="caption">Caption text</Text>
            <Text variant="overline">Overline text</Text>
        </View>
    );
}