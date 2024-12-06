import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const textStyles = cva('text-base text-black dark:text-white', {
    variants: {
        variant: {
            // Display
            'display-2xl': 'text-8xl font-bold tracking-tight',
            'display-xl': 'text-7xl font-bold tracking-tight',
            'display-lg': 'text-6xl font-bold tracking-tight',

            // Headings
            h1: 'text-5xl font-bold tracking-tight',
            h2: 'text-4xl font-semibold tracking-tight',
            h3: 'text-3xl font-semibold tracking-tight',
            h4: 'text-2xl font-semibold tracking-tight',
            h5: 'text-xl font-semibold',
            h6: 'text-lg font-semibold',

            // Body
            'body-lg': 'text-lg',
            'body-base': 'text-base',
            'body-sm': 'text-sm',
            'body-xs': 'text-xs',

            // Special variants
            caption: 'text-sm text-gray-500 dark:text-gray-400',
            overline: 'text-xs uppercase tracking-wider',
            label: 'text-sm font-medium',
        },
        weight: {
            thin: 'font-thin',
            light: 'font-light',
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold',
            extrabold: 'font-extrabold',
        },
        align: {
            left: 'text-left',
            center: 'text-center',
            right: 'text-right',
            justify: 'text-justify',
        },
        color: {
            primary: 'text-gray-900 dark:text-gray-100',
            secondary: 'text-gray-600 dark:text-gray-400',
            tertiary: 'text-gray-500 dark:text-gray-500',
            error: 'text-red-600 dark:text-red-400',
            success: 'text-green-600 dark:text-green-400',
            warning: 'text-yellow-600 dark:text-yellow-400',
            info: 'text-blue-600 dark:text-blue-400',
        }
    },
    defaultVariants: {
        variant: 'body-base',
        weight: 'normal',
        align: 'left',
        color: 'primary',
    }
});

export interface TextProps extends RNTextProps, VariantProps<typeof textStyles> {
    children: React.ReactNode;
}

export const Text = ({
    children,
    variant,
    weight,
    align,
    color,
    className,
    ...props
}: TextProps) => {
    return (
        <RNText
            className={textStyles({ variant, weight, align, color, className })}
            {...props}
        >
            {children}
        </RNText>
    );
};
