import React from 'react';
import { View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import styles from './TextField.Style';

type TextFieldProps = {
  icon: string;
  placeholder: string;
}

const TextField: React.FC<TextFieldProps> = ({ icon, placeholder }) => {
  return (
    <View style={styles.container}>
      <FontAwesome icon={icon} size={20} color="#000" style={styles.icon} /> 
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#a9a9a9"
        style={styles.input}
      />
    </View>
  );
};

export default TextField;
