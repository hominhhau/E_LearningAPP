import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './TextInputNoIcon.style';

type NameInputNoIconProps = {
    placeholder: string;
    value?: string;
    onChangeText?: (text: string) => void;
};

const NameInputNoIcon: React.FC<NameInputNoIconProps> = 
({ 
   placeholder,
    value,
    onChangeText
}) => 
    {return (
      <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="#a9a9a9"
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>
        </View>
    );
  };

  export default NameInputNoIcon;