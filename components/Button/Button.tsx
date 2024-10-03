import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.style'; 

type ButtonProps = {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  width?: number;
};

const Button: React.FC<ButtonProps> = ({
  text,
  backgroundColor = '#00bdd6',
  textColor = '#ffffff',
  width = 100,
}) => {
   return (
    <TouchableOpacity style={[styles.button, { backgroundColor, width }]}>{/* Áp dụng width */}
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
