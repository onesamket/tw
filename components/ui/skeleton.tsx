import React from "react";
import {
    View,
    StyleSheet,
    ViewStyle,
    ViewProps,
    Dimensions,
} from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    Easing,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import useTheme from "@/hooks/use-theme";


interface SkeletonProps extends ViewProps {
    width: number | string;
    height: number | string;
    borderRadius?: number;
    style?: ViewStyle;
}

const parseDimension = (value: number | string, screenWidth: number) => {
    if (typeof value === "number") {
        return value;
    } else if (typeof value === "string") {
        if (value.endsWith("%")) {
            const percent = parseFloat(value) / 100;
            return screenWidth * percent;
        }
        return parseFloat(value);
    }
    return 0;
};

export const Skeleton: React.FC<SkeletonProps> = ({
    width,
    height,
    borderRadius = 4,
    style,
}) => {
    const screenWidth = Dimensions.get("window").width;
    const widthValue = parseDimension(width, screenWidth);
    const heightValue =
        typeof height === "number" ? height : parseDimension(height, screenWidth);
    const translateX = useSharedValue(-widthValue);
    const { isDarkMode } = useTheme();

    React.useEffect(() => {
        translateX.value = withRepeat(
            withTiming(widthValue, {
                duration: 1500,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            -1,
            false
        );
    }, [widthValue]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    const lightModeColors = ["#E0E0E0", "rgba(255, 255, 255, 0.3)", "#E0E0E0"];
    const darkModeColors = ["#444444", "rgba(255, 255, 255, 0.2)", "#444444"];

    return (
        <View
            style={[
                {
                    width: widthValue,
                    height: heightValue,
                    borderRadius,
                    backgroundColor: isDarkMode ? "#444444" : "#E0E0E0",
                    overflow: "hidden",
                },
                style,
            ]}
        >
            <Animated.View style={[StyleSheet.absoluteFill, animatedStyle]}>
                <LinearGradient
                    // @ts-ignore
                    colors={isDarkMode ? darkModeColors : lightModeColors}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={StyleSheet.absoluteFill}
                />
            </Animated.View>
        </View>
    );
};