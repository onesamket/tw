import React from 'react';
import { View } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const progressBarStyles = cva(
  'h-2 rounded-full overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-gray-200',
        success: 'bg-green-200',
        warning: 'bg-yellow-200',
        error: 'bg-red-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const progressStyles = cva(
  'h-full',
  {
    variants: {
      variant: {
        default: 'bg-blue-500',
        success: 'bg-green-500',
        warning: 'bg-yellow-500',
        error: 'bg-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ProgressBarProps extends VariantProps<typeof progressBarStyles> {
  progress: number; // 0 to 100
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, variant }) => {
  return (
    <View className={progressBarStyles({ variant })}>
      <View className={progressStyles({ variant })} style={{ width: `${progress}%` }} />
    </View>
  );
};

