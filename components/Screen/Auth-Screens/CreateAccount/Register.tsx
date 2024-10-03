import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import styles from './Register.style';

const Register = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Back button */}
          <TouchableOpacity style={styles.backButton}>
            <FontAwesome name="arrow-left" size={24} color="#000" style={styles.backIcon} />
          </TouchableOpacity>

          {/* Header section */}
          <View style={styles.header}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Sign up to get started</Text>
          </View>

          {/* Form Fields */}
          <View style={styles.inputContainer}>
            <FontAwesome name="user" size={20} color="#00BBD6" style={styles.icon} />
            <TextInput
              placeholder="Enter First and Last Name"
              placeholderTextColor="#A9A9A9"
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome name="envelope" size={20} color="#00BBD6" style={styles.icon} />
            <TextInput
              placeholder="Enter Email"
              placeholderTextColor="#A9A9A9"
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome name="phone" size={20} color="#00BBD6" style={styles.icon} />
            <TextInput
              placeholder="Enter number phone"
              placeholderTextColor="#A9A9A9"
              style={styles.input}
            />
          </View>

          {/* Create Account Button */}
          <TouchableOpacity style={styles.createAccountButton}>
            <Text style={styles.createAccountButtonText}>Create Account</Text>
          </TouchableOpacity>

          {/* OR Section */}
          <View style={styles.orSection}>
            <Text style={styles.orText}>OR</Text>
            <Text style={styles.signUpWithText}>Sign up with</Text>

            {/* Google Sign-up */}
            {/* <TouchableOpacity style={styles.googleButton}>
              <Image
                source={require('./assets/icons-google-1.svg')}
                style={styles.googleIcon}
              />
              <Text style={styles.googleButtonText}>Google</Text>
            </TouchableOpacity> */}
          </View>

          {/* Footer Text */}
          <Text style={styles.footerText}>
            Already have an account? <Text style={styles.loginText}>Login</Text>
          </Text>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Register;
