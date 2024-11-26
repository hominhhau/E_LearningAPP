import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./ChatBubble.style";
import { API_Chatgpt } from "../../../apis/Api_Chatgpt";

const ChatBubble: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [botResponse, setBotResponse] = useState("");
  interface Message {
    type: "user" | "bot";
    text: string;
  }

  const [messages, setMessages] = useState<Message[]>([]);
  const scrollViewRef = useRef<ScrollView | null>(null);

  const handleSendMessage = async () => {
    if (message.trim() === "") {
      return;
    }
    const response = await API_Chatgpt.getChatgpt(message);
    console.log(response);
    setBotResponse(response.choices[0].message.content);
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: message },
      { type: "bot", text: response.choices[0].message.content },
    ]);
    setMessage("");
  };

  // Scroll to the bottom when a new message is added
  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

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

            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.chatSection}
            >
              <ScrollView
                ref={scrollViewRef}
                // contentContainerStyle={styles.chatMessages}
                keyboardShouldPersistTaps="handled"
              >
                {messages.map((msg, index) => (
                  <View
                    key={index}
                    style={
                      msg.type === "bot"
                        ? styles.botMessage
                        : styles.userMessage
                    }
                  >
                    <Text
                      style={
                        msg.type === "bot" ? styles.botText : styles.userText
                      }
                    >
                      {msg.text}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            </KeyboardAvoidingView>

            <View style={styles.inputSection}>
              <TextInput
                style={styles.input}
                placeholder="Type a message..."
                value={message}
                onChangeText={setMessage}
              />
              <TouchableOpacity
                style={styles.sendButton}
                onPress={handleSendMessage}
              >
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
