import React from 'react';
import { Text, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { styles } from '@/constants/input-styles';

interface ThemedButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

const ThemedButton: React.FC<ThemedButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ThemedButton;
