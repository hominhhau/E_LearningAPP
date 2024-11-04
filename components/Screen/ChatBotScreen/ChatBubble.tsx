import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./ChatBubble.style";

const ChatBubble = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.buttonChatBubble}
        onPress={() => setModalVisible(true)}
      >
        <Image
          source={require("../../../assets/gif/BietTuot.gif")}
          style={styles.image}
        />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>

            <View style={styles.header}>
              <Image
                source={require("../../../assets/gif/BietTuot.gif")}
                style={styles.headerImage}
              />
              <Text style={styles.headerText}>K-Bot</Text>
              <Text style={styles.subHeaderText}>Support Agent</Text>
            </View>

            <View style={styles.chatSection}>
              <View style={styles.botMessage}>
                <Text style={styles.botText}>Can I help you?</Text>
              </View>
            </View>

            <View style={styles.inputSection}>
              <TextInput
                style={styles.input}
                placeholder="Type a message..."
                value={message}
                onChangeText={setMessage}
              />
              <TouchableOpacity style={styles.sendButton} onPress={() => console.log("Send message !")}>
                <Ionicons name="send-outline" size={20} color="#00bdd6" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ChatBubble;
