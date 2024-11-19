import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';  // Thêm useState
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import ArrowBack from '@/components/Button/Arrow-back';
import NameInputNoIcon from '@/components/TextInputNoIcon/TextInputNoIcon';
import Button from '@/components/Button/Button';
import { Api_Auth } from '../../../apis/Api_Auth';  // Import API

const ForgotPasswordScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');  // State để lưu email

  
  const handleSendCode = async () => {
    try {
      await Api_Auth.forgotPassword(email);  // Gọi API quên mật khẩu
      alert('Mã reset mật khẩu đã được gửi đến email của bạn.');
      navigation.navigate('EnterCodeForgotPassword');  // Chuyển hướng sau khi gửi thành công
    } catch (error) {
      console.error('Có lỗi xảy ra:', error);
      alert('Có lỗi xảy ra khi gửi mã quên mật khẩu.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerIcon}>
        <ArrowBack onPress={() => {
          navigation.goBack();
        }} />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>
          Enter email address and a link to reset your password will be sent to you.
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <NameInputNoIcon 
          placeholder="Enter email" 
          value={email}  // Gán giá trị email cho TextInput
          onChangeText={setEmail}  // Cập nhật state khi thay đổi
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          text="Send code"
          backgroundColor="#00bdd6"
          textColor="#ffffff"
          width={350}
          onPress={handleSendCode}  // Gọi hàm gửi mã khi nhấn nút
        />
      </View>

      <TouchableOpacity onPress={() => {
        navigation.navigate('Login');
      }}>
        <Text style={styles.loginText}>
          Remember Password? <Text style={styles.loginLink}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerIcon: {
    marginBottom: 40,
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 28.8,
    color: '#00bdd6',
    marginBottom: 16,
  },
  subtitle: {
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    color: '#555555',
  },
  inputContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  loginText: {
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19.2,
    color: '#222222',
    textAlign: 'center',
  },
  loginLink: {
    color: '#00bdd6',
    textDecorationLine: 'underline',
  },
});

export default ForgotPasswordScreen;
