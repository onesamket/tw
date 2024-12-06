import React from 'react';
import { ActivityIndicator } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const spinnerStyles = cva(
  '',
  {
    variants: {
      size: {
        small: 'w-4 h-4',
        medium: 'w-8 h-8',
        large: 'w-12 h-12',
      },
      color: {
        primary: 'text-blue-500',
        secondary: 'text-gray-500',
        white: 'text-white',
      },
    },
    defaultVariants: {
      size: 'medium',
      color: 'primary',
    },
  }
);

export interface SpinnerProps extends VariantProps<typeof spinnerStyles> {}

export const Spinner: React.FC<SpinnerProps> = ({ size, color }) => {
  const style = spinnerStyles({ size, color });
  return (
    <ActivityIndicator 
      size={size === 'small' ? 'small' : 'large'} 
      color={style.split(' ').find(c => c.startsWith('text-'))?.split('-')[1]}
    />
  );
};

