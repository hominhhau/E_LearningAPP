import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type CourseProps = {
    imageCourse: any;
    nameCourse: string;
    nameTeacher: string;
    price: string;
    onIconStarPress: () => void;
    textIcon: string;
    onIconLesson: string;
    textIconLesson: string;
    onIconBookmarkPress: () => void;
};