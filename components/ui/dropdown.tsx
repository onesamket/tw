import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const dropdownStyles = cva(
  'border rounded-md p-2 flex-row justify-between items-center',
  {
    variants: {
      variant: {
        default: 'border-gray-300 bg-white',
        primary: 'border-blue-500 bg-blue-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const optionStyles = cva(
  'p-3',
  {
    variants: {
      isSelected: {
        true: 'bg-blue-100',
        false: 'bg-white',
      },
    },
    defaultVariants: {
      isSelected: false,
    },
  }
);

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps extends VariantProps<typeof dropdownStyles> {
  options: DropdownOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
  placeholder?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, selectedValue, onSelect, placeholder, variant }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(option => option.value === selectedValue);

  return (
    <View>
      <TouchableOpacity onPress={() => setIsOpen(true)} className={dropdownStyles({ variant })}>
        <Text>{selectedOption ? selectedOption.label : placeholder || 'Select an option'}</Text>
        <Text>▼</Text>
      </TouchableOpacity>
      <Modal visible={isOpen} transparent animationType="slide">
        <View className="flex-1 justify-end bg-black bg-opacity-50">
          <View className="bg-white rounded-t-lg">
            {options.map((option) => (
              <TouchableOpacity
                key={option.value}
                onPress={() => {
                  onSelect(option.value);
                  setIsOpen(false);
                }}
                className={optionStyles({ isSelected: option.value === selectedValue })}
              >
                <Text>{option.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setIsOpen(false)} className="p-3 bg-gray-200">
              <Text className="text-center font-semibold">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

