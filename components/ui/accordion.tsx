import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const accordionStyles = cva(
  'border rounded-md overflow-hidden',
  {
    variants: {
      variant: {
        default: 'border-gray-300',
        outlined: 'border-blue-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const headerStyles = cva(
  'p-4 flex-row justify-between items-center',
  {
    variants: {
      variant: {
        default: 'bg-gray-100',
        outlined: 'bg-blue-100',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface AccordionProps extends VariantProps<typeof accordionStyles> {
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children, variant }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View className={accordionStyles({ variant })}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} className={headerStyles({ variant })}>
        <Text className="font-semibold">{title}</Text>
        <Text>{isOpen ? '▲' : '▼'}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View className="p-4">
          {children}
        </View>
      )}
    </View>
  );
};

