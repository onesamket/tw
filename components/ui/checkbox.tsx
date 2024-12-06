import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const checkboxStyles = cva(
  'w-6 h-6 border-2 rounded flex items-center justify-center',
  {
    variants: {
      variant: {
        default: 'border-gray-400',
        error: 'border-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const checkStyles = cva(
  'w-4 h-4 rounded',
  {
    variants: {
      variant: {
        default: 'bg-blue-500',
        error: 'bg-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface CheckboxProps extends VariantProps<typeof checkboxStyles> {
  checked: boolean;
  onToggle: () => void;
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onToggle, label, variant }) => {
  return (
    <TouchableOpacity onPress={onToggle} className="flex-row items-center">
      <View className={checkboxStyles({ variant })}>
        {checked && <View className={checkStyles({ variant })} />}
      </View>
      {label && <Text className="ml-2">{label}</Text>}
    </TouchableOpacity>
  );
};

