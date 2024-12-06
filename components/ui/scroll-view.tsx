import { ScrollView as NativeScrollView, ScrollViewProps } from 'react-native';


interface Props extends ScrollViewProps {
    children: React.ReactNode,
}

export default function ScrollView({ children, ...props }: Props) {
    return (
        <NativeScrollView
            className="bg-primary-light dark:bg-[#1c1c1e]" {...props}
        >
            {children}
        </NativeScrollView>
    );
}