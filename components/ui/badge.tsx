import React from 'react';
import { Text, View } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeStyles = cva(
  'rounded-full px-2 py-1',
  {
    variants: {
      variant: {
        default: 'bg-blue-500',
        success: 'bg-green-500',
        error: 'bg-red-500',
        warning: 'bg-yellow-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const textStyles = cva(
  'text-xs font-bold',
  {
    variants: {
      variant: {
        default: 'text-white',
        success: 'text-white',
        error: 'text-white',
        warning: 'text-black',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps extends VariantProps<typeof badgeStyles> {
  text: string;
}

export const Badge: React.FC<BadgeProps> = ({ text, variant }) => {
  return (
    <View className={badgeStyles({ variant })}>
      <Text className={textStyles({ variant })}>{text}</Text>
    </View>
  );
};

