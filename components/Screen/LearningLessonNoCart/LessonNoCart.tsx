import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TopNavigationBar from '@/components/navigation/TopNavigationBar';
import TabBarNoCart from '../TabBar/TabBarNoCart';
import AddToCart from '@/components/Button/AddToCart';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/components/navigation/types'; // Adjust the import path as necessary


const LessonNoCart: React.FC = () =>{
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    //const navigation = useNavigation();
    const handleAddToCart = () => {
        // Điều hướng đến màn hình Cart
        navigation.navigate('Cart');
    };

    return(
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
            <View style={styles.header}>
            <TopNavigationBar 
                onBackPress={() => {}}
                onBookmarkPress={() => {}}
                onMorePress={() => {}}
                titleHeader="UX Foundation"
            />
                   
            </View>

            <View style={styles.thumbnailContainer}>
                <Text>VIDEO</Text>
            </View>

            <View style={styles.courseInfoContainer}>
                <Text>Course Info</Text>
            </View>

            <View style={styles.tabBarContainer}>
                <TabBarNoCart />
                
            </View>

            <View style={styles.buttonCart}>
                <AddToCart 
                    icon="cart"
                    text="Add to Cart"
                    backgroundColor="#00bdd6"
                    textColor="#ffffff"
                    width={100}
                    onPress={handleAddToCart}
                />
            </View>

        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingVertical: 20, // Tạo khoảng trống trên dưới khi cuộn
    },
    container:{
        flex: 1,
    },
    header:{
        
    },
    thumbnailContainer:{
        backgroundColor: 'pink',
        height: 250,
    },
    courseInfoContainer:{
        padding: 10,
    },
    tabBarContainer:{
        padding: 10,
    },
    buttonCart:{},

});

export default LessonNoCart;