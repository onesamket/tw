import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const inputWrapperStyles = cva(
  'rounded-md border',
  {
    variants: {
      variant: {
        default: 'border-gray-300',
        error: 'border-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const inputStyles = cva(
  'px-3 py-2 text-base',
  {
    variants: {
      variant: {
        default: 'text-gray-900',
        error: 'text-red-900',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface InputProps extends VariantProps<typeof inputStyles> {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ placeholder, value, onChangeText, variant, error }) => {
  return (
    <View>
      <View className={inputWrapperStyles({ variant })}>
        <TextInput
          className={inputStyles({ variant })}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      {error && <Text className="text-red-500 text-xs mt-1">{error}</Text>}
    </View>
  );
};

