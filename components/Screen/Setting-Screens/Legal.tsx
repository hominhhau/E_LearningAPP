import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import ArrowBack from "@/components/Button/Arrow-back";

const Legal: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ArrowBack
          onPress={() => navigation.navigate('Setting')}
        />
        <Text style={styles.textHeader}>Legal and Policies</Text>
      </View>
      <View style={styles.termContainer}>
        <Text style={styles.textTitle}>Term</Text>
        <Text style={styles.textContent}>The online learning mobile application designed on Figma by Minh Hau and Quynh Giang is a flexible and convenient learning platform. With a friendly interface, the application provides many learning features such as video tutorials, interactive lectures, and tests. Students can easily access and access knowledge anytime, anywhere through this application.</Text>
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
    marginLeft: 70,
  },
  termContainer:{
    marginTop: 20,

  },
  textTitle:{
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textContent:{
    fontSize: 18,
    textAlign: "justify",
    color: "gray",
  }
});

export default Legal;
