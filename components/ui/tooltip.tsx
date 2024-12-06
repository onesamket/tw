import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const tooltipStyles = cva(
  'absolute bg-gray-800 rounded-md p-2 max-w-xs',
  {
    variants: {
      position: {
        top: 'bottom-full mb-2',
        bottom: 'top-full mt-2',
        left: 'right-full mr-2',
        right: 'left-full ml-2',
      },
    },
    defaultVariants: {
      position: 'top',
    },
  }
);

export interface TooltipProps extends VariantProps<typeof tooltipStyles> {
  text: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ text, children, position }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View className="relative">
      <TouchableOpacity
        onPress={() => setIsVisible(!isVisible)}
        onLongPress={() => setIsVisible(true)}
        onPressOut={() => setIsVisible(false)}
      >
        {children}
      </TouchableOpacity>
      {isVisible && (
        <View className={tooltipStyles({ position })}>
          <Text className="text-white text-sm">{text}</Text>
        </View>
      )}
    </View>
  );
};

