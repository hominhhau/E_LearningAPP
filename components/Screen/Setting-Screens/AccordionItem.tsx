import React, { useState } from "react";
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

type AccordionItemProps = {
    title: string;
    content: string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <View style={styles.accordionItem}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.accordionHeader}>
        <Text style={styles.accordionTitle}>{title}</Text>
        <Ionicons 
          name={isOpen ? "chevron-up" : "chevron-down"} 
          size={20} 
          color="#333" 
        />
      </TouchableOpacity>
      {isOpen && <Text style={styles.accordionContent}>{content}</Text>}
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
      },
      accordionItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        paddingVertical: 10,
      },
      accordionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      accordionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
      },
      accordionContent: {
        marginTop: 10,
        fontSize: 14,
        color: '#666',
      },
});
export default AccordionItem;