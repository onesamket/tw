import React from 'react';
import { Text, View } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';



type CalloutVariant = 'info' | 'warning' | 'error';

const calloutStyles = cva(
  'rounded-lg p-4',
  {
    variants: {
      variant: {
        info: 'bg-blue-100 border-l-4 border-blue-500',
        warning: 'bg-yellow-100 border-l-4 border-yellow-500',
        error: 'bg-red-100 border-l-4 border-red-500',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

const textStyles = cva(
  'text-sm',
  {
    variants: {
      variant: {
        info: 'text-blue-700',
        warning: 'text-yellow-700',
        error: 'text-red-700',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);
const iconStyles = cva(
  'w-6 h-6',
  {
    variants: {
      variant: {
        info: 'text-blue-500',
      },
    },
  }
);

export interface CalloutProps extends VariantProps<typeof calloutStyles> {
  text: string;
}

export const Callout: React.FC<CalloutProps> = ({ text, variant }) => {
  return (
    <View className={calloutStyles({ variant })}>
      <Text className={textStyles({ variant })}>{text}</Text>
    </View>
  );
};

