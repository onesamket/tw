import Providers from '@/providers/providers';
import { Stack, } from 'expo-router';

export default function ApplicationLayout() {
    return (
        <Providers>
            <Stack
                initialRouteName='(tabs)'
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name='index' />
                <Stack.Screen name='(tabs)' />
            </Stack>
        </Providers>
    );
}