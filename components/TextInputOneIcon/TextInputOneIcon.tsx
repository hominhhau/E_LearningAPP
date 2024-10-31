import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./TextInputOneIcon.style";

type NameInputOneIconProps = {
  label: string;
  placeholder: string;
  iconName: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

const NameInputOneIcon: React.FC<NameInputOneIconProps> = ({
  label,
  placeholder,
  iconName,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <Ionicons
          name={iconName as any}
          size={20}
          color="#a9a9a9"
          style={styles.icon}
        />
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

export default NameInputOneIcon;
