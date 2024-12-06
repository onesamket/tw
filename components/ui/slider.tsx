import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { cva, type VariantProps } from 'class-variance-authority';

const sliderStyles = cva(
  '',
  {
    variants: {
      variant: {
        default: 'bg-blue-500',
        success: 'bg-green-500',
        warning: 'bg-yellow-500',
        danger: 'bg-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface SliderProps extends VariantProps<typeof sliderStyles> {
  value: number;
  onValueChange: (value: number) => void;
  minimumValue?: number;
  maximumValue?: number;
  step?: number;
  showValue?: boolean;
}

export const CustomSlider: React.FC<SliderProps> = ({
  value,
  onValueChange,
  minimumValue = 0,
  maximumValue = 100,
  step = 1,
  showValue = true,
  variant,
}) => {
  const thumbTintColor = sliderStyles({ variant }).split(' ')[0].split('-')[1];

  return (
    <View>
      <Slider
        value={value}
        onValueChange={onValueChange}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        step={step}
        minimumTrackTintColor={thumbTintColor}
        maximumTrackTintColor="#000000"
        thumbTintColor={thumbTintColor}
      />
      {showValue && (
        <Text className="text-center mt-2">{value}</Text>
      )}
    </View>
  );
};

