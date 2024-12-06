import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const tabsContainerStyles = cva(
  'flex-row border-b',
  {
    variants: {
      variant: {
        default: 'border-gray-300',
        primary: 'border-blue-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const tabStyles = cva(
  'py-2 px-4',
  {
    variants: {
      isActive: {
        true: 'border-b-2',
        false: 'border-b-0',
      },
      variant: {
        default: 'border-gray-500',
        primary: 'border-blue-500',
      },
    },
    defaultVariants: {
      isActive: false,
      variant: 'default',
    },
  }
);

export interface Tab {
  key: string;
  title: string;
  content: React.ReactNode;
}

export interface TabsProps extends VariantProps<typeof tabsContainerStyles> {
  tabs: Tab[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs, variant }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className={tabsContainerStyles({ variant })}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.key}
              onPress={() => setActiveTab(tab.key)}
              className={tabStyles({ isActive: activeTab === tab.key, variant })}
            >
              <Text className={activeTab === tab.key ? 'font-bold' : 'font-normal'}>
                {tab.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View className="p-4">
        {tabs.find((tab) => tab.key === activeTab)?.content}
      </View>
    </View>
  );
};

