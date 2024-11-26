import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ArrowBack from "@/components/Button/Arrow-back";
import { useNavigation } from '@react-navigation/native';
import  SettingGeneralComponent01 from "./SettingGeneralComponent01";
import  SettingGeneralComponent02 from "./SettingGenneralComponent02";

const Setting: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ArrowBack
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.textHeader}>Settings</Text>
      </View>
      <View style={styles.generalContainer}>
        <Text style={styles.generalText}>General</Text>
        <SettingGeneralComponent01 />
      </View>
      <View style={styles.preferencesContainer}>
        <Text style={styles.generalText}>Preferences</Text>
        <SettingGeneralComponent02 />
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
  generalContainer: {
    marginTop: 20,
  },
  generalText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  preferencesContainer: {},
});

export default Setting;
