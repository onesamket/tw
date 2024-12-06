import useTheme from '@/hooks/use-theme'
import { Ionicons } from '@expo/vector-icons'
import React, { useEffect, useRef } from 'react'
import { Animated, ActivityIndicator, TouchableOpacity, View } from 'react-native'
import { Text } from '@/components/ui/text'

export type ToastProps = {
    message: string
    type?: 'success' | 'error' | 'info' | 'loading'
    duration?: number
    onClose: () => void
}

export function Toast({ message, type = 'info', duration = 3000, onClose }: ToastProps) {
    const opacity = useRef(new Animated.Value(0)).current
    const translateY = useRef(new Animated.Value(20)).current
    const { isDarkMode } = useTheme()

    useEffect(() => {
        Animated.parallel([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(translateY, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start()

        const timer = setTimeout(() => {
            Animated.parallel([
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(translateY, {
                    toValue: 20,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start(() => onClose())
        }, duration)

        return () => clearTimeout(timer)
    }, [])

    const getIconName = () => {
        switch (type) {
            case 'success':
                return 'checkmark-circle'
            case 'error':
                return 'alert-circle'
            default:
                return 'information-circle'
        }
    }

    const getIconColor = () => {
        switch (type) {
            case 'success':
                return '#10B981'
            case 'error':
                return '#EF4444'
            case 'loading':
                return '#249ef0'
            default:
                return '#3B82F6'

        }
    }

    return (
        <Animated.View
            style={{
                opacity,
                transform: [{ translateY }],
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }}
            className="absolute bottom-4 left-4 right-4 rounded-lg overflow-hidden"
        >
            <View className={`${isDarkMode ? 'bg-slate-100' : 'bg-white'}`}>
                <TouchableOpacity
                    onPress={onClose}
                    className="flex-row items-center justify-between p-4"
                    accessibilityRole="alert"
                >
                    <View className="flex-row items-center  flex-1">
                        {type === 'loading' ? (
                            <ActivityIndicator size="small" color={getIconColor()} />
                        ) : (
                            <Ionicons name={getIconName()} size={24} color={getIconColor()} />
                        )}
                        <Text className={`text-xs ml-1 text-slate-700 opacity-70 text-center`}>
                            {message}
                        </Text>
                    </View>
                    <Ionicons name="close" size={24} color={isDarkMode ? '#334155' : '#334155'} />
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}