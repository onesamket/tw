import TanstackQueryProvider from './query-client-provider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ToastProvider } from './toast-provider';


export default function Providers({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <TanstackQueryProvider>
            <SafeAreaProvider>
                <GestureHandlerRootView>
                    <ToastProvider>
                        <BottomSheetModalProvider>
                            {children}
                        </BottomSheetModalProvider>
                    </ToastProvider>
                </GestureHandlerRootView>
            </SafeAreaProvider>
        </TanstackQueryProvider>
    );
}
