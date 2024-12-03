import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NameInput from "@/components/TextInput/TextInput";
import Button from "@/components/Button/Button";
import ArrowBack from "@/components/Button/Arrow-back";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";
import { Api_Auth } from "@/apis/Api_Auth";
import { useSelector } from "react-redux";

const ChangePassword: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();
  const user = useSelector((state: any) => state.user.user);
  const userID = user?.userID;

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handlePasswordChange = () => {
    if (oldPassword === "" || newPassword === "") {
      alert("Please fill in all fields");
      return;
    } else {
      if (oldPassword === newPassword) {
        alert("Old password and new password must be different");
        return;
      } else {
        Api_Auth.changePassword(userID, oldPassword, newPassword)
          .then((res) => {
            console.log("Change Password Response:", res);
            alert("Password changed successfully");
            navigation.navigate("Userprofile");
          })
          .catch((error) => {
            console.error("Error changing password:", error);
            alert("Error changing password");
          });
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerIcon}>
        <ArrowBack onPress={() => navigation.goBack()} />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>Reset Password</Text>
      </View>

      <View style={styles.inputContainer}>
        <NameInput
          label="Old Password"
          placeholder="Enter Old Password"
          iconName="lock-closed-outline"
          isPassword={true}
          showPassword={showOldPassword}
          togglePasswordVisibility={() => setShowOldPassword(!showOldPassword)}
          value={oldPassword}
          onChangeText={setOldPassword}
        />

        <NameInput
          label="New Password"
          placeholder="Enter New Password"
          iconName="lock-closed-outline"
          isPassword={true}
          showPassword={showNewPassword}
          togglePasswordVisibility={() => setShowNewPassword(!showNewPassword)}
          value={newPassword}
          onChangeText={setNewPassword}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          text="Continue"
          backgroundColor="#00bdd6"
          textColor="#ffffff"
          width={350}
          onPress={handlePasswordChange}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  icon: {
    width: 20,
    height: 20,
  },
  headerIcon: {
    marginBottom: 40,
  },
  header: {
    marginVertical: 30,
    alignItems: "center",
  },
  title: {
    fontFamily: "Lato-Regular",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 28.8,
    color: "#00bed6",
  },
  subtitle: {
    fontFamily: "Lato-Regular",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16.8,
    color: "#555555",
    marginTop: 8,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontFamily: "Lato-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19.2,
    color: "#222222",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ebfdff",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#00bdd6",
    paddingHorizontal: 10,
    marginTop: 8,
  },
  input: {
    flex: 1,
    fontFamily: "Lato-Regular",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14.4,
    color: "#222222",
  },
  buttonContainer: {
    marginTop: 24,
    alignItems: "center",
  },
});

export default ChangePassword;
