import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface LessonProps {
  index: number;
  title: string;
  duration: string;
  isCompleted: boolean;
  onPress: () => void;
}

const LessonItem: React.FC<LessonProps> = ({
  index,
  title,
  duration,
  isCompleted,
  onPress,
}) => {
  //trang thai bai hoc (hoan thanh or khoa)
  const [completed, setCompleted] = useState(isCompleted);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnLesson}
        onPress={onPress}
      >
        <Text style={styles.index}>{String(index).padStart(2, "0")}</Text>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.duration}>{duration}</Text>
        </View>
        <TouchableOpacity onPress={() => setCompleted(!completed)}>
          <Ionicons
            name={completed ? "checkmark" : "lock-closed"}
            size={20}
            color={completed ? "#007AFF" : "#A0A0A0"}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  btnLesson: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  index: {
    fontSize: 16,
    color: "#A0A0A0",
    width: 30,
    textAlign: "center",
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#666",
  },
  duration: {
    fontSize: 12,
    color: "#A0A0A0",
  },
});

export default LessonItem;
