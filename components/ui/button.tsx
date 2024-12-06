import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from 'react-native'

import { ArrowRight, Check, X } from 'lucide-react-native'
import { Text } from '@/components/ui/text'
import { cn } from '@/libs/utils'
import { View } from 'react-native'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'
type IconPosition = 'left' | 'right'

interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: 'arrow' | 'check' | 'cross' | React.ReactNode
  iconPosition?: IconPosition
  isLoading?: boolean
  fullWidth?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  isLoading = false,
  fullWidth = false,
  children,
  className,
  disabled,
  ...props
}) => {
  const getVariantStyles = (): string => {
    switch (variant) {
      case 'primary':
        return 'bg-black text-white  dark:bg-primary dark:text-white '
      case 'secondary':
        return 'bg-secondary text-secondary-foreground'
      case 'outline':
        return 'bg-background border border-input text-foreground hover:bg-accent hover:text-accent-foreground'
      case 'ghost':
        return 'hover:bg-accent hover:text-accent-foreground'
      case 'danger':
        return 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
      default:
        return 'bg-primary text-primary-foreground'
    }
  }

  const getSizeStyles = (): string => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1 text-sm'
      case 'lg':
        return 'px-6 py-3 text-lg'
      default:
        return 'px-4 py-2 text-base'
    }
  }

  const getIcon = () => {
    if (typeof icon === 'object') return icon
    switch (icon) {
      case 'arrow':
        return <ArrowRight size={18} className={variant === 'primary' ? 'text-primary-foreground' : 'text-foreground'} />
      case 'check':
        return <Check size={18} className={variant === 'primary' ? 'text-primary-foreground' : 'text-foreground'} />
      case 'cross':
        return <X size={18} className={variant === 'primary' ? 'text-primary-foreground' : 'text-foreground'} />
      default:
        return null
    }
  }

  return (
    <TouchableOpacity
      className={cn(
        'flex-row items-center justify-center rounded-md',
        getVariantStyles(),
        getSizeStyles(),
        fullWidth && 'w-full',
        disabled && 'opacity-50',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={variant === 'primary' ? '#FFFFFF' : '#000000'} />
      ) : (
        <>
          {icon && iconPosition === 'left' && <View className="mr-2">{getIcon()}</View>}
          {children && (
            <Text className="dark:text-white ">
              {children}
            </Text>
          )}
          {icon && iconPosition === 'right' && <View className="ml-2">{getIcon()}</View>}
        </>
      )}
    </TouchableOpacity>
  )
}

export default Button