import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Button from '@/components/Button/Button';

const PasswordChangedScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="checkmark-circle-outline" size={100} color="#18C07A" />
      
      <View style={styles.textContainer}>
        <Text style={styles.title}>Password Changed!</Text>
        <Text style={styles.subtitle}>Your password has been changed successfully.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
        text="Back to Login"
        backgroundColor="#00bdd6"
        textColor="#ffffff"
        width={350}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  successIcon: {
    width: 62,
    height: 62,
    marginBottom: 40,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  title: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 28.8,
    color: '#1e232c',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Lato',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#555555',
    textAlign: 'center',
    marginTop: 8,
  },
  buttonContainer: {
    marginTop: 24,
  },
});

export default PasswordChangedScreen;
