import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NameInput from '@/components/TextInput/TextInput';
import Button from '@/components/Button/Button';
import ArrowBack from '@/components/Button/Arrow-back';


const PasswordScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
       <View style={styles.headerIcon}>
        <ArrowBack onPress={() => {
           navigation.goBack();

        }} />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>Create New Password</Text>
        <Text style={styles.subtitle}>Create a new Password to access your account</Text>
      </View>

      <View style={styles.inputContainer}>
        <NameInput
        label="New Password"
        placeholder="Enter Password"
        iconName="lock-closed-outline"
        isPassword={true}
        showPassword={showNewPassword}
        togglePasswordVisibility={() => setShowNewPassword(!showNewPassword)}
        />

        <NameInput
        label="Confirm Password"
        placeholder="Enter Password"
        iconName="lock-closed-outline"
        isPassword={true}
        showPassword={showConfirmPassword}
        togglePasswordVisibility={() => setShowConfirmPassword(!showConfirmPassword)}
        />

       
      </View>

      <View style={styles.buttonContainer}>
        <Button
        text="Done"
        backgroundColor="#00bdd6"
        textColor="#ffffff"
        width={350}
        onPress={() => {
          console.log('Navigating to PasswordChanged');
          navigation.navigate('PasswordChanged');
        }}
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

export default PasswordScreen;
