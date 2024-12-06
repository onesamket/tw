import React from 'react';
import { Image, View, Text } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const avatarStyles = cva(
  'relative flex items-center justify-center rounded-full overflow-hidden bg-gray-200',
  {
    variants: {
      size: {
        xs: 'w-6 h-6',
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
        xl: 'w-20 h-20',
      },
      border: {
        none: '',
        thin: 'border border-gray-200',
        thick: 'border-2 border-gray-200',
      },
      status: {
        none: '',
        online: 'after:absolute after:bottom-0 after:right-0 after:w-2.5 after:h-2.5 after:bg-green-500 after:rounded-full after:border-2 after:border-white',
        offline: 'after:absolute after:bottom-0 after:right-0 after:w-2.5 after:h-2.5 after:bg-gray-400 after:rounded-full after:border-2 after:border-white',
        busy: 'after:absolute after:bottom-0 after:right-0 after:w-2.5 after:h-2.5 after:bg-red-500 after:rounded-full after:border-2 after:border-white',
      },
    },
    defaultVariants: {
      size: 'md',
      border: 'none',
      status: 'none',
    },
  }
);

export interface AvatarProps extends VariantProps<typeof avatarStyles> {
  source?: { uri: string };
  fallback?: string;
  alt?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  source,
  size,
  border,
  status,
  fallback,
  alt
}) => {
  const initials = React.useMemo(() => {
    if (!fallback) return '';
    return fallback
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }, [fallback]);

  const textSize = React.useMemo(() => {
    switch (size) {
      case 'xs': return 'text-xs';
      case 'sm': return 'text-sm';
      case 'md': return 'text-base';
      case 'lg': return 'text-lg';
      case 'xl': return 'text-xl';
      default: return 'text-base';
    }
  }, [size]);

  return (
    <View className={avatarStyles({ size, border, status })}>
      {source ? (
        <Image
          source={source}
          className="w-full h-full"
          accessibilityLabel={alt}
        />
      ) : (
        <Text className={`${textSize} font-medium text-gray-600`}>
          {initials}
        </Text>
      )}
    </View>
  );
};

