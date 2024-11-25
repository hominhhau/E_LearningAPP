import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ArrowBack from "@/components/Button/Arrow-back";

const EditProfile: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ArrowBack
          onPress={() => {
            console.log("Back");
          }}
        />
        <Text style={styles.textHeader}>Edit Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://example.com/path-to-your-image.jpg" }}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Username</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#4A4A4A" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            value="Martha Rosie"
            editable={false} // Không cho phép chỉnh sửa
          />
        </View>
        <Text style={styles.label}>Email or Phone Number</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#4A4A4A" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            value="MarthaRosie@gmail.com"
            editable={false} // Không cho phép chỉnh sửa
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E0E0E0', // Màu nền thay thế nếu chưa có ảnh
  },
  infoContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#4A4A4A',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 16,
    color: '#4A4A4A',
    flex: 1,
  },
});

export default EditProfile;
