import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const deviceWidth = Dimensions.get('window').width;

const GeneralTabBar: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('Home'); // Trạng thái cho tab hiện tại

    const tabs: { name: string; icon: 'home-outline' | 'search-outline' | 'book-outline' | 'person-outline' }[] = [
        { name: 'Home', icon: 'home-outline' },
        { name: 'Search', icon: 'search-outline' },
        { name: 'My Courses', icon: 'book-outline' },
        { name: 'Profile', icon: 'person-outline' },
    ];

    return (
        <View style={styles.container}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab.name}
                    style={styles.item}
                    onPress={() => setActiveTab(tab.name)} // Cập nhật tab đang chọn
                >
                    <Ionicons
                        name={tab.icon}
                        size={30}
                        color={activeTab === tab.name ? '#57d3e3ff' : '#999999'} // Đổi màu icon
                    />
                    <Text
                        style={[
                            styles.text,
                            activeTab === tab.name ? styles.activeText : null // Đổi màu text
                        ]}
                    >
                        {tab.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute', // Đặt vị trí tuyệt đối
        bottom: 0, // Đặt ở dưới cùng
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 67,
        width: deviceWidth,
        borderTopWidth: 1, // Độ dày của đường viền
        borderTopColor: '#d3d3d3', // Màu sắc của đường viền xám
    },
    item: {
        alignItems: 'center',
    },
    text: {
        fontWeight: '600',
        fontSize: 12,
        color: '#a5a9b0ff',
        textAlign: 'center',
        marginTop: 5,
    },
    activeText: {
        color: '#57d3e3ff',
    },
});

export default GeneralTabBar;
