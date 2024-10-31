import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type TopicProps = {
  text: string;
};

const TopicButton: React.FC<TopicProps> = ({ text }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: '#00bdd6', // Màu xanh dương sáng
    borderRadius: 20, // Bo tròn các góc
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start', // Button tự điều chỉnh kích thước theo nội dung
  },
  buttonText: {
    color: '#00C2D8', // Màu xanh dương sáng
    fontWeight: '600',
    fontSize: 16,
  },
});

export default TopicButton;