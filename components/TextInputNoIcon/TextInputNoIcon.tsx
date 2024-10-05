import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './TextInputNoIcon.style';

type NameInputNoIconProps = {
    placeholder: string;
};

const NameInputNoIcon: React.FC<NameInputNoIconProps> = 
({ 
   placeholder
}) => 
    {return (
      <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="#a9a9a9"
                    style={styles.input}
                />
            </View>
        </View>
    );
  };

  export default NameInputNoIcon;