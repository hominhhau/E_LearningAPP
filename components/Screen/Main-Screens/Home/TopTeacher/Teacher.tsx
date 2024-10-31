import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type TeacherProps = {
  imageTeacher: any; 
  nameTeacher: string;
  educationTeacher: string;
  rating: number; 
  onIconStarPress: () => void;
};

const TeacherCard = ({
  imageTeacher,
  nameTeacher,
  educationTeacher,
  rating,
  onIconStarPress
}: TeacherProps) => {
  const [isFavorited, setIsFavorited] = useState(false); 

  const handleStarPress = () => {
    setIsFavorited(!isFavorited); 
    onIconStarPress(); 
  };

  return (
    <View style={styles.card}>
      <Image source={imageTeacher} style={styles.image} />
      <Text style={styles.name}>{nameTeacher}</Text>
      <Text style={styles.education}>{educationTeacher}</Text>
      <View style={styles.ratingRow}>
        <TouchableOpacity onPress={handleStarPress}>
          <Ionicons
            name={isFavorited ? 'star' : 'star-outline'}
            size={24}
            color={isFavorited ? 'gold' : '#FFFF33'}
          />
        </TouchableOpacity>
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 150,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  education: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 16,
    color: 'gray',
  },
});

export default TeacherCard;
