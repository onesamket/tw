import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Star } from 'lucide-react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const ratingStyles = cva(
  'flex-row',
  {
    variants: {
      size: {
        small: 'gap-1',
        medium: 'gap-2',
        large: 'gap-3',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

const starStyles = cva(
  '',
  {
    variants: {
      size: {
        small: 'w-4 h-4',
        medium: 'w-6 h-6',
        large: 'w-8 h-8',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

export interface RatingProps extends VariantProps<typeof ratingStyles> {
  rating: number;
  maxRating?: number;
  onRatingChange?: (rating: number) => void;
}

export const Rating: React.FC<RatingProps> = ({ rating, maxRating = 5, onRatingChange, size }) => {
  const handlePress = (index: number) => {
    if (onRatingChange) {
      onRatingChange(index + 1);
    }
  };

  return (
    <View className={ratingStyles({ size })}>
      {[...Array(maxRating)].map((_, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(index)}>
          <Star
            className={starStyles({ size })}
            fill={index < rating ? '#FFD700' : 'none'}
            stroke={index < rating ? '#FFD700' : '#000000'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

