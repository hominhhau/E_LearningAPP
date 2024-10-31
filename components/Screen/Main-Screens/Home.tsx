import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderComponent from './Home/Header/HeaderComponent';
import HeaderAdvertisementComponent from './Home/Advertisement/HeaderAdvertisementComponent';
import CategoryComponent from './Home/Categories/CategoriesComponent';
import CoursePopularComponent from './Home/PopularCourses/CoursePopularComponent';
import CourseThatInspiresComponent from './Home/CourseThatInspires/CourseThatInspiresComponent';
import RecommendedForYouComponent from './Home/RecommendedForYou/RecommendedForYouComponent';
import TopTeacherComponent from './Home/TopTeacher/TopTeacherComponent';
import GeneralTabBar from '../TabBar/GeneralTabBar';

const Home: React.FC = () => {
    return(
        <View style={styles.container}>
            <HeaderComponent />
            
            <ScrollView>
                <View style={styles.adver}>
                <HeaderAdvertisementComponent />
                </View>

                <CategoryComponent />
                <CoursePopularComponent />
                <CourseThatInspiresComponent />
                <RecommendedForYouComponent />
                <TopTeacherComponent />
                
            </ScrollView>

            <GeneralTabBar />


        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    adver:{
        marginTop: 10,
        marginBottom: 10,
    }
});

export default Home;