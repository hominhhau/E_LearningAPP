import React, { useState, useCallback } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { RootStackParamList } from "../../../navigation/types";
import { useSelector } from "react-redux";
import HistoryByCourse from "./HistoryByCourse";

const User: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();
  const [avatar, setAvatar] = useState<string | null>(null);
  const user = useSelector((state: any) => state.user.user);
  const username = user?.name || "Guest";

  const reloadUserData = useCallback(() => {
    console.log("Reloading user data...");
    // Add your data fetching or refreshing logic here
  }, []);

  useFocusEffect(
    useCallback(() => {
      reloadUserData();
    }, [reloadUserData])
  );

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
            source={require("../../../../assets/images/AnhBia.png")}
            style={styles.imgBia}
          />
        </View>
        <TouchableOpacity
          onPress={() => console.log("Avatar pressed")}
          style={styles.avatarContainer}
        >
          <Image
            source={
              avatar
                ? { uri: avatar }
                : require("../../../../assets/images/LogoE-LEARNING_1.png")
            }
            style={styles.avatar}
          />
        </TouchableOpacity>
        <Text style={styles.textName}>{username}</Text>
      </View>
      <View style={styles.container}>
        <ScrollView>
          <HistoryByCourse />
        </ScrollView>
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
});

export default User;
