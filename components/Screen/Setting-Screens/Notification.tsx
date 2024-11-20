import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import ArrowBack from "@/components/Button/Arrow-back";

const Notification: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ArrowBack
          onPress={() => navigation.navigate('Setting')}
        />
        <Text style={styles.textHeader}>Notification</Text>
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Notification</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#B2EBF2" }}
          thumbColor={isEnabled ? "#00C4CC" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
    marginLeft: 100,
  },
  switchContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  label: {
    padding: 10,
    fontSize: 18,
    color: '#333',
    marginRight: 10,
  },
});

export default Notification;
