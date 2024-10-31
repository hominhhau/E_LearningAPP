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
import styles from "./TextInput.style";

type NameInputProps = {
  label: string;
  placeholder: string;
  iconName: string;
  isPassword?: boolean; // Prop mới để xác định xem trường nhập liệu có phải là mật khẩu không
  showPassword: boolean; // Trạng thái để kiểm soát hiển thị mật khẩu
  togglePasswordVisibility: () => void; // Hàm để thay đổi trạng thái
  value: string;
  onChangeText: (text: string) => void;
};

const NameInput: React.FC<NameInputProps> = ({
  label,
  placeholder,
  iconName,
  isPassword = false,
  showPassword,
  togglePasswordVisibility,
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
          secureTextEntry={isPassword && !showPassword}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
        />
        {isPassword && ( // Chỉ hiển thị icon mắt nếu là trường mật khẩu
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={20}
              color="#a9a9a9"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default NameInput;
