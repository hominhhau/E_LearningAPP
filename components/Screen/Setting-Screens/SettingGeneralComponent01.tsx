import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import SettingGeneral from './SettingGeneral';


const SettingGeneralComponent01: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return(
        <View style={styles.container}>
            <SettingGeneral 
            icon="person-outline" 
            title="Edit Profile" 
            backgroundColor="white" 
            onPress={() => {console.log('Edit Profile')}} 
            iconNext={true}
            />
            <SettingGeneral 
            icon="lock-open-outline" 
            title="Change Password" 
            backgroundColor="white" 
            onPress={() => {console.log('Change Password')}}
            iconNext={true} 
            />
            <SettingGeneral 
            icon="notifications-outline" 
            title="Notification" 
            backgroundColor="white" 
            onPress={() => navigation.navigate('Notification')}
            iconNext={true} 
            />
            <SettingGeneral 
            icon="shield-checkmark-outline" 
            title="Security" 
            backgroundColor="white" 
            onPress={() => navigation.navigate('Security')}   
            iconNext={true} 
            />
            <SettingGeneral 
            icon="globe-outline" 
            title="Language" 
            backgroundColor="white" 
            onPress={() => navigation.navigate('Language')}
            iconNext={true} 
            />
            
        </View>

    );
};
const styles = StyleSheet.create({
    container:{
        padding: 16
    }
});

export default SettingGeneralComponent01;