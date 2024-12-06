import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface ListItem {
  id: string;
  title: string;
}

interface AnimatedListProps {
  data: ListItem[];
}

const AnimatedListItem: React.FC<{ item: ListItem; index: number }> = ({ item, index }) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(50);

  React.useEffect(() => {
    opacity.value = withTiming(1, { duration: 500 });
    translateY.value = withTiming(0, { duration: 500 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View style={[styles.listItem, animatedStyle]}>
      <Text style={styles.listItemText}>{item.title}</Text>
    </Animated.View>
  );
};

export const AnimatedList: React.FC<AnimatedListProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => <AnimatedListItem item={item} index={index} />}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  listItemText: {
    fontSize: 16,
  },
});

