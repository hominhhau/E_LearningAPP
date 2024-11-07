import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FindComponent from "./Search/FindComponent";
import Category from "./Home/Categories/Categories";

const Search: React.FC = () => {
  return (
    <View style={styles.container}>
      <FindComponent />
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Categories</Text>
        <TouchableOpacity onPress={() => console.log('View more Pressed')}>
                    <Text style={styles.viewMore}>View more</Text>
                </TouchableOpacity>
      </View>
      <View style={styles.categoriesContainer}>
      <Category
        icon="trending-up-outline"
        title="Business"
        backgroundColor="#00BCD4"
        onPress={() => console.log("Business Pressed")}
        iconNext={true}
      />
      <Category
        icon="code-outline"
        title="Code"
        backgroundColor="#e05858"
        onPress={() => console.log("Code Pressed")}
        iconNext={true}
      />
      <Category
        icon="videocam-outline"
        title="Movie"
        backgroundColor="#8252e3"
        onPress={() => console.log("Video Pressed")}
        iconNext={true}
      />
      <Category
        icon="brush-outline"
        title="Design"
        backgroundColor="#8252e3"
        onPress={() => console.log("Design Pressed")}
        iconNext={true}
      />
      <Category
        icon="document-text-outline"
        title="Writing"
        backgroundColor="#3f6ae9"
        onPress={() => console.log("Writing Pressed")}
        iconNext={true}
      />
      <Category
        icon="earth-outline"
        title="Language"
        backgroundColor="#ec7d2d"
        onPress={() => console.log("Language Pressed")}
        iconNext={true}
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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoriesContainer:{
    //marginTop: 10,
  },
  viewMore: {
    fontSize: 14,
    color: '#00BCD4',
},
});

export default Search;
