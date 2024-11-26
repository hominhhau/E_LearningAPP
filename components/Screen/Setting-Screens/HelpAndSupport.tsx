import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import ArrowBack from "@/components/Button/Arrow-back";
import AccordionItem from "@/components/Screen/Setting-Screens/AccordionItem";

const HelpAndSupport: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ArrowBack
          onPress={() => navigation.navigate('Setting')}
        />
        <Text style={styles.textHeader}>Help and Support</Text>
      </View>
      <View style={styles.helpContainer}>
        <AccordionItem
          title="How to create an account?"
          content="To create an account, you need to click on the 'Sign Up' button on the login page. Then, you need to fill in the required information and click on the 'Sign Up' button to create an account."
        />
        <AccordionItem
          title="How to reset the password?"
          content="To reset the password, you need to click on the 'Forgot Password' button on the login page. Then, you need to enter your email address and click on the 'Reset Password' button. An email will be sent to your email address with instructions on how to reset the password."
        />
        <AccordionItem
          title="How to contact support?"
          content="Support Email: support@elearningapp.com"
        />
        <AccordionItem
            title="Report a Problem"
            content="If you encounter any problems while using the application, you can report the problem by sending an email to support@elearningapp.com "
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
    marginLeft: 70,
  },
  helpContainer: {
    marginTop: 20,
  },
});

export default HelpAndSupport;
