import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import UpProject from "./Project/UpProject";

const ProjectFinalCart: React.FC = () => {
    return(
        <View style={styles.container}>
            <UpProject />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
});

export default ProjectFinalCart;