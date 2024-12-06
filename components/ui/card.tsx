import React from 'react';
import { View, Text } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const cardStyles = cva(
  'rounded-lg p-4 shadow-md',
  {
    variants: {
      variant: {
        default: 'bg-white',
        outlined: 'bg-transparent border border-gray-300',
        elevated: 'bg-white shadow-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface CardProps extends VariantProps<typeof cardStyles> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, variant }) => {
  return (
    <View className={cardStyles({ variant })}>
      {children}
    </View>
  );
};

