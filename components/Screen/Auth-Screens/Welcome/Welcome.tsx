import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './WelcomeScreen.Styles';
import Button from '@/components/Button/Button';

const WelcomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/gif/BietTuot.gif')} style={styles.mainImage} />
            
            <View style={styles.textContainer}>
                <Text style={styles.title}>Simplify Learning, Elevate Success</Text>
                <Text style={styles.subtitle}>
                    Enjoy flexible learning at your convenience, whether at home or on the go
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    text="Login"
                    backgroundColor="#00bdd6"
                    textColor="#ffffff"
                    width={150}
                    onPress={() => {
                        navigation.navigate('Login');
                    }}
                />
                <Button
                    text="Register"
                    backgroundColor="#ffffff"
                    textColor="#00bdd6"
                    width={150}
                    onPress={() => {
                       
                        navigation.navigate('CreateAccountScreen');
                    }}
                />
            </View>
        </View>
    );
};

export default WelcomeScreen;
