import useTheme from '@/hooks/use-theme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {

    const { bottom } = useSafeAreaInsets();
    const { isDarkMode } = useTheme();

    return (
        <View
            className={`flex-row border-t-0 absolute bottom-0 left-0 right-0 ${isDarkMode ? 'bg-primary-dark' : 'bg-white'} p-4`}
            style={{ height: bottom }}
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.title ?? route.name;
                const isFocused = state.index === index;
                if (['_sitemap', "account", '+not-found'].includes(route.name)) return null;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };


                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        onPress={onPress}
                        className="flex-1 justify-center items-center relative"
                    >
                        {/* Animated Background for Active Tab */}
                        {isFocused && (
                            <View
                                className={`absolute top-0 -bottom-2 h-[25px] ${isDarkMode ? 'bg-slate-600/50' : 'bg-slate-200'} rounded-full self-center`}

                            />
                        )}
                        {/* Tab Icon and Label */}
                        <View className="bg-transparent top-1 items-center">
                            {options.tabBarIcon?.({
                                focused: isFocused,
                                color: isFocused ? (isDarkMode ? '#ffffff' : '#000000') : (isDarkMode ? '#8e8e93' : '#6b6b6b'),
                                size: 16,
                            })}
                            {/* Tab Label */}
                            <Text
                                className={`mt-2 text-[10px] ${isFocused
                                    ? (isDarkMode ? 'text-white' : 'text-black')
                                    : (isDarkMode ? 'text-gray-400' : 'text-gray-600')
                                    }`}
                            >
                                {label}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}