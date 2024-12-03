import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";
import SettingGeneral from "./SettingGeneral";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingGeneralComponent02: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Logout canceled"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            console.log("Logged out successfully");
            // Xóa thông tin người dùng khỏi AsyncStorage (nếu có lưu thông tin đăng nhập)
            AsyncStorage.removeItem("userData")
              .then(() => {
                console.log("User data cleared");
                // Điều hướng về màn hình đăng nhập
                navigation.navigate("Login", { resetPassword: true });
              })
              .catch((error) =>
                console.error("Error clearing user data:", error)
              );
          },
        },
      ],
      { cancelable: true }
    );
  };
  return (
    <View style={styles.container}>
      <SettingGeneral
        icon="shield-outline"
        title="Legal and Policies"
        backgroundColor="white"
        onPress={() => navigation.navigate("Legal")}
        iconNext={true}
      />
      <SettingGeneral
        icon="information-circle-outlines"
        title="Help and Support"
        backgroundColor="white"
        onPress={() => navigation.navigate("HelpAndSupport")}
        iconNext={true}
      />
      <SettingGeneral
        icon="log-out-outline"
        title="Log Out"
        backgroundColor="white"
        onPress={handleLogout}
        iconNext={true}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default SettingGeneralComponent02;
