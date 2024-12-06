import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { cva, type VariantProps } from 'class-variance-authority';

const datePickerStyles = cva(
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

export interface DatePickerProps extends VariantProps<typeof datePickerStyles> {
  date: Date;
  onDateChange: (date: Date) => void;
  mode?: 'date' | 'time' | 'datetime';
}

export const DatePicker: React.FC<DatePickerProps> = ({ date, onDateChange, mode = 'date', variant }) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatDate = (date: Date) => {
    if (mode === 'time') {
      return date.toLocaleTimeString();
    } else if (mode === 'datetime') {
      return date.toLocaleString();
    }
    return date.toLocaleDateString();
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setIsOpen(true)} className={datePickerStyles({ variant })}>
        <Text>{formatDate(date)}</Text>
        <Text>📅</Text>
      </TouchableOpacity>
      {isOpen && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={(event, selectedDate) => {
            setIsOpen(false);
            if (selectedDate) {
              onDateChange(selectedDate);
            }
          }}
        />
      )}
    </View>
  );
};

