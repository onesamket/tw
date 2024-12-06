import { useColorScheme } from 'nativewind';
import React from 'react';
import { View as NativeView, StatusBar, ViewProps } from 'react-native';

interface Props extends ViewProps {
    children?: React.ReactNode,
}
export function View({ children, ...props }: Props) {

    const { colorScheme } = useColorScheme();
    return (
        <NativeView className="bg-primary-light dark:bg-[#1c1c1e]" {...props}>
            <StatusBar
                backgroundColor={colorScheme === "dark" ? '#1c1c1e' : '#ffff'}
                barStyle={colorScheme === "dark" ? 'light-content' : 'dark-content'} />
            {children}
        </NativeView>
    );
}