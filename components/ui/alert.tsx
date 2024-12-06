import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import useTheme from '@/hooks/use-theme';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

interface AlertDialogProps {
    isVisible: boolean;
    title: string;
    description: string;
    actionText: string;
    cancelText: string;
    onRequestAccess: () => void;
    onClose: () => void;
}

export function AlertDialog({
    isVisible,
    title,
    description,
    actionText,
    cancelText,
    onRequestAccess,
    onClose,
}: AlertDialogProps) {
    const { isDarkMode } = useTheme();

    const handleClose = () => {
        onClose();
    }
    const handleRequestAccess = () => {
        onRequestAccess();
    }

    return (
        <Modal
            presentationStyle='overFullScreen'
            isVisible={isVisible}
            onBackdropPress={handleClose}
            animationIn="fadeIn"
            animationOut="fadeOut"
            useNativeDriver={true}
            hideModalContentWhileAnimating={true}
        >
            <View className="bg-white p-6 rounded-lg shadow-lg dark:bg-black dark:text-white">
                <Text className={`text-lg font-semibold`}>
                    {title}
                </Text>
                <Text className={`mt-2 `}>
                    {description}
                </Text>

                <View className="flex-row  justify-around mt-8">
                    <TouchableOpacity onPress={onClose} className={`px-4 py-2 rounded-lg ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`}>
                        <Text className={`text-base`}>{cancelText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleRequestAccess} className={`ml-2 px-4 py-2 rounded-lg ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'}`}>
                        <Text className={`text-base text-white`}>{actionText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}