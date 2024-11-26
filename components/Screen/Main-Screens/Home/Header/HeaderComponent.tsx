import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/components/navigation/types";

const HeaderComponent = () => {
  const navigation = useNavigation<RootStackParamList>();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.titleUser}>Hello, Rosie!</Text>
          <Text style={styles.title}>What do you want to learn today?</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.iconCart}
            onPress={() => navigation.navigate("Cart")}
          >
            <Ionicons name="cart-outline" size={32} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconNotice}>
            <Ionicons name="notifications-outline" size={32} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
    backgroundColor: "#00BCD4",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#00BCD4",
    height: 80,
  },
  textContainer: {
    flexDirection: "column",
  },
  titleUser: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  title: {
    fontSize: 14,
    color: "white",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconCart: {
    marginRight: 15,
  },
  iconNotice: {
    marginLeft: 15,
  },
});

export default HeaderComponent;
