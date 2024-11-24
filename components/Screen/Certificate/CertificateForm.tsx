import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CertificateForm = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => console.log("Back")}>
                    <Ionicons name="arrow-back" size={32} color="#000" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.title}>Certificate</Text>
                <TouchableOpacity>
                    <Ionicons name="download-outline" size={32} color="#000" style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Image
                    source={require('../../../assets/images/LogoE-LEARNING_1.png')}
                    style={styles.logo}
                />
                <Text style={styles.certificateTitle}>Certificate of Completion</Text>
                <Text style={styles.presentedText}>Presented to</Text>
                <Text style={styles.studentName}>Tên Learner</Text>
                <Text style={styles.description}>for the successful completion of</Text>
                <Text style={styles.courseTitle}>Tên Course</Text>
                <Text style={styles.issueDate}>Issued on </Text>
                <Text style={styles.certificateId}>ID: </Text>
                <Image
                    source={{ uri: 'https://your-signature-url.com/signature.png' }}
                    style={styles.signature}
                />
                <Text style={styles.managerName}>Tên Giao Vien</Text>
                <Text style={styles.managerTitle}>Course Manager</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: '#fff',
    },
    icon: {
        fontSize: 24,
        color: '#000',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00AEEF',
    },
    content: {
        //flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 40,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#00AEEF',
        borderRadius: 10,
        alignItems: 'center',
    },
    logo: {
        width: 90,
        height: 90,
        marginBottom: 20,
    },
    certificateTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#444',
    },
    presentedText: {
        fontSize: 16,
        color: '#888',
    },
    studentName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00AEEF',
        marginVertical: 5,
    },
    description: {
        fontSize: 14,
        color: '#888',
        marginBottom: 10,
    },
    courseTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 10,
    },
    issueDate: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
    },
    certificateId: {
        fontSize: 14,
        color: '#888',
        marginBottom: 20,
    },
    signature: {
        width: 100,
        height: 30,
        marginVertical: 10,
    },
    managerName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#444',
    },
    managerTitle: {
        fontSize: 14,
        color: '#888',
    },
});

export default CertificateForm;
