import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.style'; 
import { loadFonts } from '@/assets/fonts/fonts';

type ButtonProps = {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  width?: number;
   onPress: () => void;
  
};

const Button: React.FC<ButtonProps> = ({
  text,
  backgroundColor = '#00bdd6',
  textColor = '#ffffff',
  width = 100,
  onPress, // Nhận onPress từ props
}) => {
   return (
    <TouchableOpacity 
    style={[styles.button, { backgroundColor, width }]}
    onPress={onPress}
    
    >{/* Áp dụng width */}
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>

    </TouchableOpacity>
  );
};

export default Button;
