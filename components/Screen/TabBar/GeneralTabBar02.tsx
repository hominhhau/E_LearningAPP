import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/components/navigation/assets/types';

const GeneralTabBar02: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    
    const handlePress = (tab: string) => {
        setActiveTab(tab);
        console.log(tab);

        switch (tab) {
            case 'Home':
                navigation.navigate('Home');  // Đảm bảo rằng bạn đã khai báo Home trong navigation stack
                break;
            case 'My Courses':
                navigation.navigate('MyCourse');
                break;
            case 'Search':
                navigation.navigate('Search');
                break;
            default:
                break;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <TouchableOpacity onPress={() => handlePress('Home')} style={styles.tab}>
                    <Ionicons 
                        name="home-outline" 
                        size={30} 
                        color={activeTab === 'Home' ? '#00bdd6' : '#999999'} 
                    />
                    <Text style={[styles.tabText, { color: activeTab === 'Home' ? '#00bdd6' : '#999999' }]}>
                        Home
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('Search')} style={styles.tab}>
                    <Ionicons 
                        name="search-outline" 
                        size={30} 
                        color={activeTab === 'Search' ? '#00bdd6' : '#999999'} 
                    />
                    <Text style={[styles.tabText, { color: activeTab === 'Search' ? '#00bdd6' : '#999999' }]}>
                        Search
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('My Courses')} style={styles.tab}>
                    <Ionicons 
                        name="book-outline" 
                        size={30} 
                        color={activeTab === 'My Courses' ? '#00bdd6' : '#999999'} 
                    />
                    <Text style={[styles.tabText, { color: activeTab === 'My Courses' ? '#00bdd6' : '#999999' }]}>
                        My Courses
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('Profile')} style={styles.tab}>
                    <Ionicons 
                        name="person-outline" 
                        size={30} 
                        color={activeTab === 'Profile' ? '#00bdd6' : '#999999'} 
                    />
                    <Text style={[styles.tabText, { color: activeTab === 'Profile' ? '#00bdd6' : '#999999' }]}>
                        Profile
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        //paddingVertical: 20,
        height: 80, 
    },
    tab: {
        alignItems: 'center',
    },
    tabText: {
        fontSize: 12,
        color: '#999999',
    },
});

export default GeneralTabBar02;
