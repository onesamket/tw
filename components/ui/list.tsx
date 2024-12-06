import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const listStyles = cva(
  'divide-y',
  {
    variants: {
      variant: {
        default: 'divide-gray-200',
        primary: 'divide-blue-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const itemStyles = cva(
  'py-2',
  {
    variants: {
      variant: {
        default: 'bg-white',
        primary: 'bg-blue-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ListItem {
  id: string;
  title: string;
  description?: string;
}

export interface ListProps extends VariantProps<typeof listStyles> {
  items: ListItem[];
}

export const List: React.FC<ListProps> = ({ items, variant }) => {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      className={listStyles({ variant })}
      renderItem={({ item }) => (
        <View className={itemStyles({ variant })}>
          <Text className="font-semibold">{item.title}</Text>
          {item.description && <Text className="text-sm text-gray-600">{item.description}</Text>}
        </View>
      )}
    />
  );
};

