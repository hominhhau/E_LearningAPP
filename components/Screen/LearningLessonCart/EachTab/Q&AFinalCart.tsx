import React, {useState, useMemo} from "react";
import { View, StyleSheet } from "react-native";
import CommentComponent from "./Q&A/CommentComponent";

const QAFinalCart: React.FC = () => {
    return(
        <View style={styles.container}>
            <CommentComponent />
        </View>

    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16
    }
});

export default QAFinalCart;