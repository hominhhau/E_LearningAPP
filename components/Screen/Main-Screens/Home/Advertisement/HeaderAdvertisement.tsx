import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

type HeaderAdvertisementProps = {
    titleCourse: string;
    titleDiscount: string;
    imageCourse: any; // Bạn sẽ truyền ảnh ở đây (ví dụ: require('./image.png'))
    onButtonPress: () => void;
};

const HeaderAdvertisement: React.FC<HeaderAdvertisementProps> = ({
    titleCourse,
    titleDiscount,
    imageCourse,
    onButtonPress,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{titleCourse}</Text>
                <Text style={styles.discount}>{titleDiscount}</Text>
                <TouchableOpacity style={styles.button} onPress={onButtonPress}>
                    <Text style={styles.buttonText}>JOIN NOW</Text>
                </TouchableOpacity>
            </View>
            <Image source={imageCourse} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#8353e2', // Màu nền tím
        padding: 20,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    discount: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 10,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#00bdd6', 
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: 150,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        width: 120,
        height: 150,
        resizeMode: 'contain',
    },
});

export default HeaderAdvertisement;
