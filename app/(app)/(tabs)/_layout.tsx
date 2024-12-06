import { Tabs } from 'expo-router';
import { Clock, Home, User, Wallet } from 'lucide-react-native';
import { Platform, useColorScheme, View } from 'react-native';

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: isDark ? '#000' : '#fff',
                    borderTopWidth: 0,
                    elevation: 0,
                    height: Platform.OS === 'ios' ? 85 : 70,
                    paddingBottom: Platform.OS === 'ios' ? 20 : 10,

                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View className={`items-center justify-center p-3 rounded-full ${focused ? 'bg-blue-500' : ''}`}>
                            <Home color={color} size={size} />
                        </View>
                    ),
                    href: '/',
                }}
            />
            <Tabs.Screen
                name="task"
                options={{
                    title: 'Task',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View className={`items-center justify-center`}>
                            <Clock color={color} size={size} />
                        </View>
                    ),
                    href: '/task',
                }}
            />
            <Tabs.Screen
                name="actions"

                options={{
                    title: 'Actions',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View className={`items-center justify-center ${focused ? 'bg-red-500' : ''}`}>
                            <Wallet color={color} size={size} />
                        </View>
                    ),
                    href: null,
                }}
            />
            <Tabs.Screen
                name="wallet"
                options={{
                    title: 'Wallet',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View className={`items-center justify-center ${focused ? 'bg-red-500' : ''}`}>
                            <Wallet color={color} size={size} />
                        </View>
                    ),
                    href: '/wallet',
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: 'Account',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View className={`items-center justify-center ${focused ? 'bg-red-500' : ''}`}>
                            <User color={color} size={size} />
                        </View>
                    ),
                    href: '/account',
                }}
            />
        </Tabs>
    );
}

