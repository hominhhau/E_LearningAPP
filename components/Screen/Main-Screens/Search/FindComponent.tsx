import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FindComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Ionicons name="search" size={20} color="black" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search course"
          placeholderTextColor="#B0B0B0"
        />
      </View>

      <TouchableOpacity style={styles.filterButton}>
        <View style={styles.filterContent}>
          <Ionicons name="filter-outline" size={20} color="#fff" />
          <Text style={styles.filterText}>Filter</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#F7F7F7',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  filterButton: {
    backgroundColor: '#00C2D8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  filterContent: {
    flexDirection: 'row',
    alignItems: 'center', // Ensures icon and text are centered vertically
  },
  filterText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 5, // Adds some space between the icon and text
  },
});

export default FindComponent;
