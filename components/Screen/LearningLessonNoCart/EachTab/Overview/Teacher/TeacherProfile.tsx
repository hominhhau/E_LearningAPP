import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import UserProfile from './UserProfile';
import ButtonCustomer from '@/components/Screen/LearningLessonNoCart/EachTab/Overview/ButtonCustom/ButtonCus';
import { RouteProp, useRoute } from '@react-navigation/native'; 
import { RootStackParamList } from '@/components/navigation/types'; 

type TeacherProfileRouteProp = RouteProp<RootStackParamList, 'LessonNoCart'>;

const TeacherProfile: React.FC= () => {
    const [showFullText, setShowFullText] = useState(false);

    const route = useRoute<TeacherProfileRouteProp>();
    const nameTeacher = route.params?.nameTeacher;

    // const dataTeacher = [
    //     {
    //         id: 1,
    //         imageTeacher: require('../../../../../../assets/images/ImageTeacher.png'),
    //         nameTeacher: "Sara Weise",
    //         role: "UI/UX Designer",
    //     },
    //     {
    //         id: 2,
    //         imageTeacher: require('../../../../../../assets/images/ImageTeacher.png'),
    //         nameTeacher: "John Doe",
    //         role: "Web Developer",
    //     },
    // ]
    const description = `Knowledgeable in UX design (such as user research, user behavior, user journey)
    and UI (interface design, visual design principles, color theory, typography).
    Capable of conveying complex concepts in an easy-to-understand manner, 
    guiding students through hands-on practice via real-world projects.`;

    // Giới hạn văn bản chỉ hiển thị một phần
    const limitedText = description.split('\n').slice(0, -3).join('\n') + '...';

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <UserProfile
                    imageTeacher={require('../../../../../../assets/images/ImageTeacher.png')}
                    nameTeacher={nameTeacher}
                    role={"UI/UX Designer"}
                />
                <ButtonCustomer
                    text="Follow"
                    backgroundColor="#00bdd6"
                    textColor="#ffffff"
                    width={100}
                    onPress={() => { console.log('Follow') }}
                />
            </View>

            <Text style={styles.title}>Description</Text>
            <Text style={styles.desText}>
                {showFullText ? description : limitedText}
            </Text>

            <TouchableOpacity onPress={() => setShowFullText(!showFullText)}>
                <Text style={styles.seeMoreText}>
                    {showFullText ? 'See Less' : 'See More'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0,
        padding: 20,
    },
    profileContainer: {
        flexDirection: 'row', //can theo chieu ngang
        alignItems: 'center', //can giua chieu doc
        justifyContent: 'space-between', //can khoang cach giua cac phan tu
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20, //Khoang cach profile va mo ta
    },
    desText: {
        fontSize: 16,
        lineHeight: 24,
        marginTop: 10, //Khoang cach tieu de va mo ta
    },
    seeMoreText: {
        color: '#00bdd6', 
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default TeacherProfile;
