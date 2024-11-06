import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GeneralTabBar02: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Home');

    const handlePress = (tab: string) => {
        setActiveTab(tab);
        console.log(tab);
    };

    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <TouchableOpacity onPress={() => handlePress('Home')} style={styles.tab}>
                    <Ionicons 
                        name="home-outline" 
                        size={30} 
                        color={activeTab === 'Home' ? '#57d3e3ff' : '#999999'} 
                    />
                    <Text style={[styles.tabText, { color: activeTab === 'Home' ? '#57d3e3ff' : '#999999' }]}>
                        Home
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('Search')} style={styles.tab}>
                    <Ionicons 
                        name="search-outline" 
                        size={30} 
                        color={activeTab === 'Search' ? '#57d3e3ff' : '#999999'} 
                    />
                    <Text style={[styles.tabText, { color: activeTab === 'Search' ? '#57d3e3ff' : '#999999' }]}>
                        Search
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('My Courses')} style={styles.tab}>
                    <Ionicons 
                        name="book-outline" 
                        size={30} 
                        color={activeTab === 'My Courses' ? '#57d3e3ff' : '#999999'} 
                    />
                    <Text style={[styles.tabText, { color: activeTab === 'My Courses' ? '#57d3e3ff' : '#999999' }]}>
                        My Courses
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('Profile')} style={styles.tab}>
                    <Ionicons 
                        name="person-outline" 
                        size={30} 
                        color={activeTab === 'Profile' ? '#57d3e3ff' : '#999999'} 
                    />
                    <Text style={[styles.tabText, { color: activeTab === 'Profile' ? '#57d3e3ff' : '#999999' }]}>
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
        paddingVertical: 10,
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
