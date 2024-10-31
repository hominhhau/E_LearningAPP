import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import ArrowBack from '@/components/Button/Arrow-back';
import NameInputOneIcon from '@/components/TextInputOneIcon/TextInputOneIcon';
import Button from '@/components/Button/Button';
import GoogleLogoIcon from '@/assets/Icon/GoogleLogoIcon';

const CreateAccountScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
   const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <ArrowBack onPress={() => {
        navigation.navigate('Welcome')
        }} />
    
      <View style={styles.header}>
        <Text style={styles.headerText}>Create Account</Text>
        <Text style={styles.subheaderText}>Sign up to get started</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <NameInputOneIcon 
          label="Full Name" 
          placeholder="Enter First and Last Name" 
          iconName="person-outline" 
           value={fullName}
          onChangeText={setFullName}
          />

          <NameInputOneIcon 
          label="Email Address" 
          placeholder="Enter Email" 
          iconName="mail-outline" 
          value={email}
          onChangeText={setEmail}
          />

          <NameInputOneIcon 
          label="Phone" 
          placeholder="Enter number phone" 
          iconName="call-outline" 
          value={phone}
          onChangeText={setPhone}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button 
        text="Create Account"
        backgroundColor="#00bdd6"
        textColor="#ffffff"
        width={350}
        onPress={() => {
          navigation.navigate('CreateNewPassword', { fullName, email, phone });
        }}
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

      <Text style={styles.loginText}>
        Already have an account? <Text style={styles.loginLink}>Login</Text>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  header: {
    marginTop: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#00bdd6',
    lineHeight: 28.8,
  },
  subheaderText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#555555',
    marginTop: 10,
  },
  form: {
    marginTop: 30,
  },
  inputContainer: {
    marginBottom: 20,

  },
  label: {
    fontSize: 14,
    fontWeight: '400',
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
    marginTop: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  textInput: {
    flex: 1,
    padding: 10,
    fontSize: 12,
    fontWeight: '400',
    color: '#a9a9a9',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  orContainer: {
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  orText: {
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.8,
    color: '#222222',
    marginVertical: 10,
  },
  signUpWith: {
    fontFamily: 'Lato-Regular',
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
  loginText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#222222',
    textAlign: 'center',
    marginTop: 20,
    
  },
  loginLink: {
    color: '#00bdd6',
  },
  
});

export default CreateAccountScreen;
