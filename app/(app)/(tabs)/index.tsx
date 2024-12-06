import Button from '@/components/ui/button';
import { View } from 'react-native';
import { useToast } from '@/providers/toast-provider';
import { CustomDialog } from '@/components/ui/dialog';
import { AlertDialog } from '@/components/ui/alert';

interface Props {
}

export default function Index({ }: Props) {
    const { toast } = useToast()
    const handleClick = () => {
        toast({
            message: 'This is a toast',
            type: 'success',
        })
    }

    return (
        <View className='flex-1 items-center justify-center'>
            <Button onPress={handleClick}>Click me</Button>
            <CustomDialog
                title="Request Buna☕ Access"
                description="To enhance your experience, we need access to your Buna☕s. This will allow us to suggest friends and provide personalized content."
                actionText="Allow"
                onAction={() => {
                    toast({
                        message: 'Access granted',
                        type: 'success',
                    })
                }}
                cancelText="Cancel"
                onCancel={() => { }}
            >
                <Button>Open Dialog</Button>
            </CustomDialog>

            <AlertDialog
                title="Request Buna☕ Access"
                description="To enhance your experience, we need access to your Buna☕s. This will allow us to suggest friends and provide personalized content."
                actionText="Allow"
                cancelText="Cancel"
                isVisible={true}
                onRequestAccess={() => { }}
                onClose={() => { }}
            />
        </View>
    );
}