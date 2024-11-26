import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Category from "./Categories";
import { Api_Category } from "@/apis/Api_Category";

type Category = {
  id: number;
  name: string;
  description: string;
};

const CategoryComponent: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await Api_Category.getAllCategories();
        console.log("Full Response:", response);
        const data = response.data || response;
        console.log("Categories:", data);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity onPress={() => console.log("View more Pressed")}>
          <Text style={styles.viewMore}>View more</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.columnContainer}>
        {categories.map((category, index) => (
          <View key={index} style={styles.column}>
            <Category
              icon="trending-up-outline"
              backgroundColor="#00BCD4"
              title={category.name}
              onPress={() => console.log(`${category} Pressed`)}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  viewMore: {
    fontSize: 14,
    color: "#00BCD4",
  },
  columnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default CategoryComponent;
