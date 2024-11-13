import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from 'expo-document-picker';

const UpProject: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleUpload = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({});
    //   if (res.type === 'success') {
    //     setUploadedFiles([...uploadedFiles, res.name]);  // Thêm tên tệp vào danh sách
    //     console.log('File đã chọn:', res);
    //   }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload your project</Text>
      <View style={styles.projectContainer}>
        <TouchableOpacity style={styles.uploadBox} onPress={handleUpload}>
          <Ionicons name="cloud-upload" size={30} color="#00C4CC" />
          <Text style={styles.uploadText}>Upload your project here</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.fileList}>
        {uploadedFiles.map((file, index) => (
          <View key={index} style={styles.fileItem}>
            <Ionicons name="document" size={20} color="#00C4CC" />
            <Text style={styles.fileName}>{file}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  projectContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  uploadBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#00C4CC",
    backgroundColor: "#E6F9FA",
    width: "90%",
  },
  uploadText: {
    fontSize: 16,
    color: "#00C4CC",
    marginLeft: 10,
  },
  fileList: {
    marginTop: 20,
  },
  fileItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  fileName: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
});

export default UpProject;
