import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

// Định nghĩa kiểu cho props
type TabBarMyCourseProps = {
    activeTab: string;//chua ten tab hien tai
    setActiveTab: (tab: string) => void;
};

// Component TabBarCard
const TabBarMyCourse: React.FC<TabBarMyCourseProps> = ({ activeTab, setActiveTab }) => {
    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <TouchableOpacity onPress={() => setActiveTab('ALL')} style={styles.tab}>
                    <Text style={[styles.tabText, activeTab === 'ALL' && styles.activeText]}>ALL</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setActiveTab('ON GOING')} style={styles.tab}>
                    <Text style={[styles.tabText, activeTab === 'ON GOING' && styles.activeText]}>ON GOING</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setActiveTab('COMPLETED')} style={styles.tab}>
                    <Text style={[styles.tabText, activeTab === 'COMPLETED' && styles.activeText]}>COMPLETED</Text>
                </TouchableOpacity>
            </View>

            {/* Đường gạch ngang dưới tab */}
            <View style={styles.indicatorContainer}>
                <View
                    style={[
                        styles.indicator,
                        activeTab === 'ALL' && { left: '0%' },
                        activeTab === 'ON GOING' && { left: '33%' },
                        activeTab === 'COMPLETED' && { left: '66%' },
                    ]}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
        paddingVertical: 10,
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        fontSize: 14,
        color: '#7f7f7f',
    },
    activeText: {
        color: '#00c3ff',
    },
    indicatorContainer: {
        height: 4,
        flexDirection: 'row',
        marginTop: 5,
        position: 'relative',
    },
    indicator: {
        position: 'absolute',
        width: '33%',
        height: '100%',
        backgroundColor: '#00c3ff',
    },
});

export default TabBarMyCourse;
