import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type ButtonCusProps = {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  width?: number;
  onPress: () => void;
};

const ButtonCustomer: React.FC<ButtonCusProps> = ({
  text,
  backgroundColor = '#00bdd6',
  textColor = '#ffffff',
  width = 50,
  onPress,
}) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor, width}]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,  // Giảm chiều cao
    paddingHorizontal: 15,  // Giảm chiều rộng
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    // Không thêm border
  },
  text: {
    fontSize: 16,  // Giảm kích thước chữ
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 24,  // Điều chỉnh dòng
    fontFamily: 'Poppins',
  },
});

export default ButtonCustomer;
