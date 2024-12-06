import React from 'react';
import { Switch as RNSwitch, View } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const switchStyles = cva(
  '',
  {
    variants: {
      size: {
        small: 'scale-75',
        medium: 'scale-100',
        large: 'scale-125',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

export interface SwitchProps extends VariantProps<typeof switchStyles> {
  value: boolean;
  onValueChange: (value: boolean) => void;
  trackColor?: { false: string; true: string };
  thumbColor?: string;
}

export const Switch: React.FC<SwitchProps> = ({ value, onValueChange, trackColor, thumbColor, size }) => {
  return (
    <View className={switchStyles({ size })}>
      <RNSwitch
        value={value}
        onValueChange={onValueChange}
        trackColor={trackColor}
        thumbColor={thumbColor}
      />
    </View>
  );
};

