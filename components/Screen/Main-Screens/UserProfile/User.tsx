import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const User = () => {
  const [avatar, setAvatar] = useState<string | null>(null);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Bạn cần cho phép quyền truy cập để tải hình lên!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri); // Cập nhật URI ảnh vào avatar
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.textHeader}>User's profile</Text>
        <TouchableOpacity onPress={() => console.log("More")} style={styles.icon}>
          <Ionicons name="ellipsis-horizontal-outline" size={32} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../../../../assets/images/AnhBia.png")}
            style={styles.imgBia}
          />
        </View>

        {/* Avatar */}
        <TouchableOpacity onPress={pickImage} style={styles.avatarContainer}>
          <Image
            source={
              avatar
                ? { uri: avatar } 
                : require("../../../../assets/images/defaultAvatar.png") // Avatar mặc định
            }
            style={styles.avatar}
          />
        </TouchableOpacity>

        <View style={styles.statisticalContainer}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingBottom: 16,
    backgroundColor: "pink",
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    position: "absolute",
    right: 0,
  },
  profileContainer: {
    alignItems: "center", // Căn giữa tất cả các phần tử bên trong
    paddingTop: 16,
  },
  imgContainer: {
    width: "100%",
    overflow: "hidden",
  },
  imgBia: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  avatarContainer: {
    marginTop: -40,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
    overflow: "hidden",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 80,
    borderRadius: 40,
  },
  statisticalContainer: {},
});

export default User;
