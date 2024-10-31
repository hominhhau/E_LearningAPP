import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import NameInputNoIcon from '@/components/TextInputNoIcon/TextInputNoIcon';
import Button from '@/components/Button/Button';
import ArrowBack from '@/components/Button/Arrow-back';
import GoogleLogoIcon from '@/assets/Icon/GoogleLogoIcon';
import * as Google from 'expo-auth-session/providers/google';
// import { initializeApp } from "firebase/app";
// import { FIREBASE_AUTH } from './FireBaseConfig'; // Import Firebase Auth instance
// import { signInWithCredential, GoogleAuthProvider } from 'firebase/auth'; // Firebase functions
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession(); // Required for Expo

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    // Initialize Google Auth with client IDs (replace with actual IDs)
    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: 'YOUR_GOOGLE_CLIENT_ID',
        iosClientId: 'YOUR_IOS_CLIENT_ID',
        androidClientId: 'YOUR_ANDROID_CLIENT_ID',
    });

    useEffect(() => {
        if (response?.type === 'success') {
            const { id_token } = response.params;

            // Create a Google credential and sign in with Firebase
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(FIREBASE_AUTH, credential)
                .then(userCredential => {
                    console.log('Logged in with Google:', userCredential.user);
                    // Navigate to the Welcome screen or any other screen after successful login
                    navigation.navigate('Welcome');
                })
                .catch(error => {
                    console.error('Error logging in with Google:', error);
                });
        }
    }, [response]);

    const handleLoginWithGoogle = () => {
        promptAsync();
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerIcon}>
                <ArrowBack onPress={() => navigation.navigate('Welcome')} />
            </View>

            <View style={styles.header}>
                <Text style={styles.loginHere}>Login here</Text>
                <Text style={styles.welcomeBack}>Welcome back, you've been missed!</Text>
            </View>

            <View style={styles.inputContainer}>
                <NameInputNoIcon placeholder="Phone number" />
                <NameInputNoIcon placeholder="Password" />
            </View>

            <View style={styles.forgotPasswordContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={styles.forgotPassword}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <Button 
                    text="Login"
                    backgroundColor="#00bdd6"
                    textColor="#ffffff"
                    width={350}
                    onPress={() => navigation.navigate('Welcome')}
                />
            </View>

            <View style={styles.orContainer}>
                <Text style={styles.orText}>OR</Text>
                <Text style={styles.signUpWith}>Sign up with</Text>
                <TouchableOpacity style={styles.googleButton} onPress={handleLoginWithGoogle} disabled={!request}>
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
    headerIcon: {
        marginBottom: 40,
    },
    header: {
        marginTop: 40,
        marginBottom: 40,
        alignItems: 'center',
    },
    loginHere: {
        fontFamily: 'Lato-Regular',
        fontWeight: '700',
        fontSize: 30,
        color: '#00bdd6',
        marginBottom: 10,
    },
    welcomeBack: {
        fontFamily: 'Lato-Regular',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 40,
    },
    forgotPasswordContainer: {
        marginBottom: 20,
        alignItems: 'flex-end',
    },
    forgotPassword: {
        fontFamily: 'Lato-Regular',
        fontWeight: '600',
        fontSize: 16,
        color: '#1f41bb',
    },
    buttonContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    orContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
    orText: {
        fontSize: 14,
        color: '#222222',
        marginVertical: 10,
    },
    signUpWith: {
        fontSize: 16,
        color: '#555555',
        marginBottom: 10,
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
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
        marginLeft: 10,
        fontSize: 18,
        color: '#000000',
        fontWeight: '600',
    },
});

export default LoginScreen;
