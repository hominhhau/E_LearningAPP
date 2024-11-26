import React from 'react';
import { View, StyleSheet } from 'react-native';
import Courses from './Course';

const courseData = [
  {
    imageCourse: require('../../../../../../assets/images/ImageCourse.png'),
    nameCourse: "Product Design",
    nameTeacher: "Dennis Sweeney",
    price: "$100",
    textIcon: "4.5",
    textIconLesson: "20 Lessons",
  },
  {
    imageCourse: require('../../../../../../assets/images/ImageCourse01.png'),
    nameCourse: "Palettes for Your App",
    nameTeacher: "Ramono Wultschner",
    price: "$59",
    textIcon: "4.5",
    textIconLesson: "20 Lessons",
  },
  {
    imageCourse: require('../../../../../../assets/images/ImageCourse02.png'),
    nameCourse: "Mobile UI Design",
    nameTeacher: "Ramono Wultschner",
    price: "$32",
    textIcon: "4.5",
    textIconLesson: "20 Lessons",
  },
];

const CourseComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      {courseData.map((course, index) => (
        <Courses
          key={index}
          imageCourse={course.imageCourse}
          nameCourse={course.nameCourse}
          nameTeacher={course.nameTeacher}
          price={course.price}
          textIcon={course.textIcon}
          textIconLesson={course.textIconLesson}
          onIconBookmarkPress={() => { console.log(`Bookmark pressed for ${course.nameCourse}`); }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CourseComponent;
