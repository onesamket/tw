import { StyleSheet, View, ViewStyle } from "react-native";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import Animated, { FadeInDown, useAnimatedStyle, withRepeat, withTiming } from "react-native-reanimated";

const { width } = Dimensions.get('window');


const AnimatedView = Animated.createAnimatedComponent(View);

interface AvatarOrbitProps {
    images: string[];
    index: number;
    total: number;
    style?: ViewStyle;
}

export const AvatarOrbit = ({ images, index, total, style }: AvatarOrbitProps) => {
    const angle = (index * 2 * Math.PI) / total;
    const radius = width * 0.25;

    const animatedStyle = useAnimatedStyle(() => {
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return {
            transform: [
                { translateX: x },
                { translateY: y },
                { scale: withRepeat(withTiming(1.1, { duration: 2000 }), -1, true) }
            ]
        };
    });

    return (
        <AnimatedView
            entering={FadeInDown.delay(200 * index)}
            style={[styles.orbitingImage, style]}>
            <Animated.View style={animatedStyle}>
                <Image source={{ uri: images[index] }} style={styles.smallProfileImage} />
            </Animated.View>
        </AnimatedView>
    );
};

const styles = StyleSheet.create({
    Container: {
        height: width * 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },
    ProfileImage: {
        width: width * 0.3,
        height: width * 0.3,
        borderRadius: width * 0.15,
        backgroundColor: '#249ef0',
    },
    orbitingImage: {
        position: 'absolute',
        width: 40,
        height: 40,
    },
    smallProfileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },

});