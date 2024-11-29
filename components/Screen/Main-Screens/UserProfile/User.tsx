import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StatsGroup from "./Statistical";
// import * as ImagePicker from "expo-image-picker";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../navigation/types";

// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { storage } from "../../../../constants/firebaseConfig"; // Import từ file config

import { useSelector } from "react-redux";

const User: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();
  const [avatar, setAvatar] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null); //truyen do
  const [uploading, setUploading] = useState(false);

  const stats = [
    { label: "Save", value: 25 },
    { label: "On Going", value: 24 },
    { label: "Completed", value: 2 },
  ];

  // const pickImage = async () => {
  //   const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //   if (!permissionResult.granted) {
  //     alert("Bạn cần cho phép quyền truy cập để tải hình lên!");
  //     return;
  //   }

  // let result = await ImagePicker.launchImageLibraryAsync({
  //   mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //   allowsEditing: true,
  //   aspect: [1, 1],
  //   quality: 1,
  // });

  //   if (!result.canceled) {
  //     const imageUri = result.assets[0].uri;
  //     setAvatar(imageUri); // Hiển thị ảnh tạm thời
  //     await uploadImageToFirebase(imageUri); // Upload ảnh lên Firebase
  //   }
  // };

  // const uploadImageToFirebase = async (uri: string) => {
  //   setUploading(true);

  //   try {
  //     const response = await fetch(uri);
  //     const blob = await response.blob();
  //     const filename = uri.substring(uri.lastIndexOf("/") + 1);

  //     const storageRef = ref(storage, `avatars/${filename}`);
  //     const snapshot = await uploadBytes(storageRef, blob);
  //     const downloadURL = await getDownloadURL(snapshot.ref);

  //     setAvatar(downloadURL);
  //     alert("Upload thành công!");
  //     console.log("Image URL:", downloadURL);
  //   } catch (error) {
  //     console.error("Upload failed:", error); // Hiển thị chi tiết lỗi trong console
  //     alert("Có lỗi xảy ra khi upload ảnh. Xem chi tiết trong console.");
  //   } finally {
  //     setUploading(false);
  //   }
  // };

  // Lấy `name` từ Redux Store
  const user = useSelector((state: any) => state.user.user);

  // Ensure the user object is loaded and contains a name
  const username = user?.name || "Guest"; // Fallback to "Guest" if name is undefined

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.textHeader}>User's profile</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Setting")}
          style={styles.icon}
        >
          <Ionicons name="ellipsis-horizontal-outline" size={32} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../../../../assets/images/AnhBia.png")} // Ảnh nền mặc định không thay đổi
            style={styles.imgBia}
          />
        </View>
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
        <Text style={styles.textName}>{username}</Text>

        <View style={styles.statisticalContainer}>
          <StatsGroup stats={stats} />
        </View>

        <View>
          <Text>Saved course</Text>
        </View>

        <View>
          <Text>History buy course</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingBottom: 16,
    //backgroundColor: "pink",
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
    alignItems: "center",
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
  textName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
  },
  statisticalContainer: {
    flexDirection: "row",
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default User;
