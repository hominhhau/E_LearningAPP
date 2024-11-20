import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

// Định nghĩa kiểu cho các tab
type TabBarNoCardProps = {
  activeTab: string; //chua ten tab hien tai
  setActiveTab: (tab: string) => void;
};

// Component TabBarCard
const TabBarNoCard: React.FC<TabBarNoCardProps> = ({ activeTab, setActiveTab }) => {

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('OVERVIEW')} style={styles.tab}>
          <Text style={[styles.tabText, activeTab === 'OVERVIEW' && styles.activeText]}>OVERVIEW</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab('LESSON')} style={styles.tab}>
          <Text style={[styles.tabText, activeTab === 'LESSON' && styles.activeText]}>LESSON</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab('REVIEW')} style={styles.tab}>
          <Text style={[styles.tabText, activeTab === 'REVIEW' && styles.activeText]}>REVIEWS</Text>
        </TouchableOpacity>
      </View>

      {/* Đường gạch ngang dưới tab */}
      <View style={styles.indicatorContainer}>
        <View
          style={[
            styles.indicator,
            activeTab === 'OVERVIEW' && { left: '0%' },
            activeTab === 'LESSON' && { left: '33%' },
            activeTab === 'REVIEW' && { left: '66%' },
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

export default TabBarNoCard;
