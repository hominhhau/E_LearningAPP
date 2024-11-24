import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NameInput from '@/components/TextInput/TextInput';
import Button from '@/components/Button/Button';
import ArrowBack from '@/components/Button/Arrow-back';
import { useNavigation } from "@react-navigation/native";
import { Alert } from 'react-native';
import { Api_Auth } from '../../../apis/Api_Auth';

const ResetPassword: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    //const navigation = useNavigation<any>();
    const { email, resetToken } = route.params || {}; // Nhận email và resetToken từ `route.params`

    console.log('Email in từ FE', email);  // In email từ frontend
    console.log('Reset Token in từ FE:', resetToken); // In resetToken từ frontend
    const handleResetPassword = async () => {
      // Kiểm tra mật khẩu mới và xác nhận mật khẩu
      if (newPassword !== confirmPassword) {
          Alert.alert("Mật khẩu không khớp", "Mật khẩu mới và mật khẩu xác nhận không khớp");
          return;
      }
  
      if (newPassword.length < 6) {
          Alert.alert("Mật khẩu quá ngắn", "Mật khẩu mới cần ít nhất 6 ký tự");
          return;
      }
  
      try {
          //gui yeu cau toi API de kiem tra
          const response = await Api_Auth.resetPassword(email, resetToken, newPassword);
          //log phan hoi tu API de kiem tra
          console.log("API Response:", response);
          if (response.success) {
              Alert.alert("Thành công", response.message);
              // Chuyển ngay sang màn hình Login
              navigation.navigate('Login');
          } else {
              Alert.alert("Lỗi", response.message || "Có lỗi xảy ra. Vui lòng thử lại.");
          }
      } catch (error) {
          console.error("Reset Password Error:", error);
          Alert.alert("Lỗi", "Có lỗi xảy ra khi đổi mật khẩu, vui lòng thử lại sau.");
      }
  };
  

    return (
      <ScrollView contentContainerStyle={styles.container}>
       <View style={styles.headerIcon}>
        <ArrowBack onPress={() => {}} />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>Reset Password</Text>
      </View>

      <View style={styles.inputContainer}>
        <NameInput
        label="New Password"
        placeholder="Enter Password"
        iconName="lock-closed-outline"
        isPassword={true}
        showPassword={showNewPassword}
        togglePasswordVisibility={() => setShowNewPassword(!showNewPassword)}
        value={newPassword}
        onChangeText={setNewPassword}
        />

        <NameInput
        label="Confirm New Password"
        placeholder="Enter Password"
        iconName="lock-closed-outline"
        isPassword={true}
        showPassword={showConfirmPassword}
        togglePasswordVisibility={() => setShowConfirmPassword(!showConfirmPassword)}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        />

       
      </View>

      <View style={styles.buttonContainer}>
        <Button
        text="Continue"
        backgroundColor="#00bdd6"
        textColor="#ffffff"
        width={350}
        onPress={handleResetPassword}
        />
      </View>

      
    </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    icon: {
      width: 20,
      height: 20,
    },
    headerIcon: {
      marginBottom: 40,
    },
    header: {
      marginVertical: 30,
      alignItems: 'center',
    },
    title: {
      fontFamily: 'Lato-Regular',
      fontWeight: 'bold',
      fontSize: 24,
      lineHeight: 28.8,
      color: '#00bed6',
    },
    subtitle: {
      fontFamily: 'Lato-Regular',
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 16.8,
      color: '#555555',
      marginTop: 8,
    },
    inputContainer: {
      marginBottom: 24,
    },
    label: {
      fontFamily: 'Lato-Regular',
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 19.2,
      color: '#222222',
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#ebfdff',
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#00bdd6',
      paddingHorizontal: 10,
      marginTop: 8,
    },
    input: {
      flex: 1,
      fontFamily: 'Lato-Regular',
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 14.4,
      color: '#222222',
    },
    buttonContainer: {
      marginTop: 24,
      alignItems: 'center',
  
    },
  });

export default ResetPassword;
