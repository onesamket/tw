import React from 'react';
import { Modal as RNModal, View, Text, TouchableOpacity } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const modalStyles = cva(
  'flex-1 justify-center items-center bg-black bg-opacity-50',
  {
    variants: {
      size: {
        small: 'p-4',
        medium: 'p-8',
        large: 'p-12',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

const contentStyles = cva(
  'bg-white rounded-lg p-4',
  {
    variants: {
      size: {
        small: 'w-3/4',
        medium: 'w-4/5',
        large: 'w-11/12',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

export interface ModalProps extends VariantProps<typeof modalStyles> {
  visible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ visible, onClose, title, children, size }) => {
  return (
    <RNModal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className={modalStyles({ size })}>
        <View className={contentStyles({ size })}>
          <Text className="text-xl font-bold mb-4">{title}</Text>
          {children}
          <TouchableOpacity onPress={onClose} className="mt-4 self-end">
            <Text className="text-blue-500">Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </RNModal>
  );
};

