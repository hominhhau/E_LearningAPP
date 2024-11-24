import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation/types';
//branch test
import Setting from '../components/Screen/Setting-Screens/Setting'
import SettingGeneralComponent01 from '../components/Screen/Setting-Screens/SettingGeneralComponent01'
import SettingGeneralComponent02 from '../components/Screen/Setting-Screens/SettingGenneralComponent02'
import Notification from '../components/Screen/Setting-Screens/Notification'
import Security from '../components/Screen/Setting-Screens/Security'
import Language from '../components/Screen/Setting-Screens/Language'
import Legal from '../components/Screen/Setting-Screens/Legal'
import HelpAndSupport from '../components/Screen/Setting-Screens/HelpAndSupport'
import EditProfile from '../components/Screen/Setting-Screens/EditProfile'
// import { RootStackParamList } from '../components/navigation/types';
const Stack = createStackNavigator();

 export default function App() {
     return (
        // <EditProfile/>
    
            <Stack.Navigator initialRouteName="Setting">
                <Stack.Screen name="Setting" component={Setting} />
                <Stack.Screen name="SettingGeneralComponent01" component={SettingGeneralComponent01} />
                <Stack.Screen name="SettingGeneralComponent02" component={SettingGeneralComponent02} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen name="Security" component={Security} />
                <Stack.Screen name="Language" component={Language} />
                <Stack.Screen name="Legal" component={Legal} />
                <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
            </Stack.Navigator>
 

   );
 };