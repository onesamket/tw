import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useColorScheme } from 'nativewind';
import { View } from './view';
import { Text } from './text';

interface CustomDialogProps {
    title: string;
    description: string;
    actionText: string;
    cancelText: string;
    onAction: () => void;
    onCancel?: () => void;
    children: React.ReactNode;
}

export function CustomDialog({
    title,
    description,
    actionText,
    cancelText,
    onAction,
    onCancel,
    children,
}: CustomDialogProps) {
    const [isVisible, setIsVisible] = useState(false);
    const { colorScheme } = useColorScheme();

    const handleOpen = () => setIsVisible(true);
    const handleClose = () => {
        setIsVisible(false);
        onCancel?.();
    };

    return (
        <>
            {/* Trigger for opening the dialog */}
            <TouchableOpacity onPress={handleOpen}>
                {children}
            </TouchableOpacity>

            {/* Modal Dialog */}
            <Modal
                presentationStyle="pageSheet"
                isVisible={isVisible}
                onBackdropPress={handleClose}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                backdropTransitionOutTiming={0}
                hideModalContentWhileAnimating={true}
                useNativeDriver={true}
            >
                <View className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800">
                    <Text className={`text-lg font-semibold ${colorScheme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                        {title}
                    </Text>
                    <Text className={`mt-2 ${colorScheme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {description}
                    </Text>
                    <View className="flex-row justify-around mt-4">
                        <TouchableOpacity
                            onPress={handleClose}
                            className={`px-4 py-2 rounded-lg ${colorScheme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'}`}
                        >
                            <Text className={`text-base ${colorScheme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                                {cancelText}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                onAction();
                                handleClose();
                            }}
                            className={`ml-2 px-4 py-2 rounded-lg ${colorScheme === 'dark' ? 'bg-blue-600' : 'bg-blue-500'}`}
                        >
                            <Text className="text-base text-white">{actionText}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
}
