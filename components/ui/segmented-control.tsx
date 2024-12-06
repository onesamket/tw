import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const segmentedControlStyles = cva(
  'flex-row rounded-lg overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-gray-200',
        primary: 'bg-blue-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const segmentStyles = cva(
  'py-2 px-4',
  {
    variants: {
      isSelected: {
        true: 'bg-white',
        false: 'bg-transparent',
      },
    },
    defaultVariants: {
      isSelected: false,
    },
  }
);

export interface SegmentedControlOption {
  label: string;
  value: string;
}

export interface SegmentedControlProps extends VariantProps<typeof segmentedControlStyles> {
  options: SegmentedControlOption[];
  selectedValue: string;
  onValueChange: (value: string) => void;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({ options, selectedValue, onValueChange, variant }) => {
  return (
    <View className={segmentedControlStyles({ variant })}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          onPress={() => onValueChange(option.value)}
          className={segmentStyles({ isSelected: option.value === selectedValue })}
        >
          <Text className={option.value === selectedValue ? 'font-bold' : 'font-normal'}>
            {option.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

