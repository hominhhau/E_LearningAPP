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
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import ArrowBack from "@/components/Button/Arrow-back";

const Language: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ArrowBack onPress={() => navigation.navigate('Setting')}
        />
        <Text style={styles.textHeader}>Security</Text>
      </View>
      <View style={styles.languageContainer}>
        <Text style={styles.label}>English</Text>
        <Image
          source={require("../../../assets/images/United_Kingdom_(3-5).png")}
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    //backgroundColor: "pink",
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 120,
  },
  languageContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 10,
    width: "100%",
    justifyContent: "space-between",
  },
  label: {
    padding: 10,
    fontSize: 18,
    color: "#333",
    marginRight: 10,
  },
});

export default Language;
