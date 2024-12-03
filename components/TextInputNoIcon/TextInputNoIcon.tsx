import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./TextInputNoIcon.style";

type NameInputNoIconProps = {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  isPassword?: boolean; // Xác định có phải là trường mật khẩu hay không
};

const NameInputNoIcon: React.FC<NameInputNoIconProps> = ({
  placeholder,
  value,
  onChangeText,
  isPassword = false, // Mặc định không phải trường mật khẩu
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#a9a9a9"
          secureTextEntry={isPassword && !showPassword} // Ẩn/hiển thị mật khẩu
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
        />
        {isPassword && ( // Nếu là trường mật khẩu thì hiển thị icon mắt
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

export default NameInputNoIcon;
