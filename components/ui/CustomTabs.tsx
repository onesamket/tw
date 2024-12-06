import React, { useState } from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

interface Route {
  key: string;
  title: string;
}

interface CustomTabsProps {
  routes: Route[];
  renderScene: (props: { route: Route }) => React.ReactNode;
}

export const CustomTabs: React.FC<CustomTabsProps> = ({ routes, renderScene }) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={styles.indicator}
          style={styles.tabBar}
          labelStyle={styles.label}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#f0f0f0',
  },
  indicator: {
    backgroundColor: '#3498db',
  },
  label: {
    color: '#333333',
    fontWeight: 'bold',
  },
});

