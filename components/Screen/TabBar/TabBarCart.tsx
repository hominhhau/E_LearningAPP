import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

// Định nghĩa kiểu cho các tab
type TabBarCardProps = {};

// Component TabBarCard
const TabBarCard: React.FC<TabBarCardProps> = () => {
  const [activeTab, setActiveTab] = useState('LESSONS');

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('LESSONS')} style={styles.tab}>
          <Text style={[styles.tabText, activeTab === 'LESSONS' && styles.activeText]}>LESSONS</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab('PROJECTS')} style={styles.tab}>
          <Text style={[styles.tabText, activeTab === 'PROJECTS' && styles.activeText]}>PROJECTS</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab('QA')} style={styles.tab}>
          <Text style={[styles.tabText, activeTab === 'QA' && styles.activeText]}>Q&A</Text>
        </TouchableOpacity>
      </View>

      {/* Đường gạch ngang dưới tab */}
      <View style={styles.indicatorContainer}>
        <View
          style={[
            styles.indicator,
            activeTab === 'LESSONS' && { left: '0%' },
            activeTab === 'PROJECTS' && { left: '33%' },
            activeTab === 'QA' && { left: '66%' },
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
    color: '#00c3ff', // Màu xanh dương cho tab được chọn
  },
  indicatorContainer: {
    height: 4,
    flexDirection: 'row',
    marginTop: 5,
    position: 'relative',
  },
  indicator: {
    position: 'absolute',
    width: '33%', // Kích thước thanh ngang chiếm 1/3 tổng chiều rộng
    height: '100%',
    backgroundColor: '#00c3ff', // Màu xanh dương cho thanh ngang
  },
});

export default TabBarCard;
