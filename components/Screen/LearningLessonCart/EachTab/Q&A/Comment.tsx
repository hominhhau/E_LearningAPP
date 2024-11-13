import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type CommentProps = {
    img: any;
    name: string;
    timeUp: string;
    commentContent: string;
};

const Comment: React.FC<CommentProps> = ({
    img,
    name,
    timeUp,
    commentContent
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={img} style={styles.avatar} />
                <View style={styles.info}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.time}>{timeUp}</Text>
                </View>
            </View>
            <Text style={styles.commentContent}>{commentContent}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 3,
        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    info: {
        flex: 1,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
    },
    time: {
        fontSize: 12,
        color: '#888',
    },
    commentContent: {
        marginVertical: 12,
        fontSize: 14,
        color: '#555',
    },
});

export default Comment;
