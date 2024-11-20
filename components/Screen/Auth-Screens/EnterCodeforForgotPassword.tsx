import { Ionicons } from '@expo/vector-icons';
import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ArrowBack from '@/components/Button/Arrow-back';
import NameInputNoIcon from '@/components/TextInputNoIcon/TextInputNoIcon';
import Button from '@/components/Button/Button';
import { Api_Auth } from '../../../apis/Api_Auth';

const EnterCodeForgotPasswordScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [code, setCode] = useState('');
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
        placeholder="Enter code"
        value={code}
        onChangeText={setCode}

         />
        
      </View>

      <View style={styles.buttonContainer}>
        <Button
        text="Continue"
        backgroundColor="#00bdd6"
        textColor="#ffffff"
        width={350}
        onPress={() => {
          navigation.navigate('CreateNewPassword',  { code } );
        }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  icon: {
    width: 34,
    height: 26,
    marginBottom: 40,
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

export default EnterCodeForgotPasswordScreen;