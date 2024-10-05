import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NameInputNoIcon from '@/components/TextInputNoIcon/TextInputNoIcon';
import Button from '@/components/Button/Button';
import ArrowBack from '@/components/Button/Arrow-back';
import GoogleLogoIcon from '@/assets/Icon/GoogleLogoIcon';


const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerIcon}>
        <ArrowBack onPress={() => {}} />
      </View>

      <View style={styles.header}>
        <Text style={styles.loginHere}>Login here</Text>
        <Text style={styles.welcomeBack}>Welcome back you’ve been missed!</Text>
      </View>

      <View style={styles.inputContainer}>
        <NameInputNoIcon placeholder="Phone number" />
        <NameInputNoIcon placeholder="Password" />
      </View>

      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot your password?</Text>
        </TouchableOpacity>
      </View> 

      <View style={styles.buttonContainer}>
        <Button 
         text="Login"
         backgroundColor="#00bdd6"
         textColor="#ffffff"
         width={350}
        />
        
      </View>

      <View style={styles.orContainer}>
        <Text style={styles.orText}>OR</Text>
        <Text style={styles.signUpWith}>Sign up with</Text>
        <TouchableOpacity style={styles.googleButton} onPress={() => {}}>
          <GoogleLogoIcon />
          <Text style={styles.googleButtonText}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  icon: {
    width: 34,
    height: 26,
    marginBottom: 30,
  },
  headerIcon: {
    marginBottom: 40,
  },
  header: {
    marginTop: 40,
    marginBottom: 40,
    alignItems: 'center',
  },
  loginHere: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 45,
    color: '#00bdd6',
    marginBottom: 10,
  },
  welcomeBack: {
    fontFamily: 'Poppins',
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 40,
  },
  forgotPasswordContainer:{
    marginBottom: 20,
    alignItems: 'flex-end',
    marginTop: -10,
  },
  forgotPassword: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 18,
    color: '#1f41bb',
    textAlign: 'right',
  },
  buttonContainer:{
    marginBottom: 20,
    alignItems: 'center',

  },
  button: {
    marginTop: 20,
    backgroundColor: '#00bdd6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
  },
  buttonText: {
    fontFamily: 'Lato',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    color: '#ffffff',
  },
  orContainer: {
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  orText: {
    fontFamily: 'Lato',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.8,
    color: '#222222',
    marginVertical: 10,
  },
  signUpWith: {
    fontFamily: 'Lato',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19.2,
    color: '#555555',
    marginBottom: 10,
  },
  googleButton: {
    flexDirection: 'row',  // Đặt biểu tượng và chữ cạnh nhau
    alignItems: 'center',  // Căn giữa theo chiều dọc
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    padding: 10,
    width: 350,
    height: 70,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  googleButtonText: {
    marginLeft: 10,//Khoang cach giua icon va text
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
  },

});

export default LoginScreen;
