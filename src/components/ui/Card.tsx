import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Spacing } from '../../constants';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'elevated' | 'outlined';
}

const Card: React.FC<CardProps> = ({ 
  children, 
  style, 
  variant = 'default' 
}) => {
  const cardStyle = [
    styles.base,
    styles[variant],
    style,
  ];

  return <View style={cardStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: Colors.background.primary,
    borderRadius: 12,
    padding: Spacing.md,
  },
  default: {
    // Base styles only
  },
  elevated: {
    shadowColor: Colors.text.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  outlined: {
    borderWidth: 1,
    borderColor: Colors.border.light,
  },
});

export default Card;