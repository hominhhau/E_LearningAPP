import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Comment from "./Comment";

const CommentComponent: React.FC = () => {
    const dataComment = [
        {
            img: require("../../../../../assets/images/img_cmt01.png"),
            name: "Jane Barry",
            timeUp: "2h ago",
            commentContent: "The course content is excellent, but I wish there were more interactive activities to engage learners further. Overall, I still learned a lot."
        },
        {
            img: require("../../../../../assets/images/img_cmt02.png"),
            name: "Thomas",
            timeUp: "3h ago",
            commentContent: "I absolutely loved this course! The structure was clear, and the content was engaging. I feel much more confident in my skills now."
        },
        {
            img: require("../../../../../assets/images/img_cmt03.png"),
            name: "Jenny Barry",
            timeUp: "4h ago",
            commentContent: "This is one of the best instructors I’ve had in an online course. Their enthusiasm and clarity made the content easy to understand."
        },
    ];
    return(
        <View style={styles.container}>
            {dataComment.map((item, index) => (
                <Comment
                    key={index}
                    img={item.img}
                    name={item.name}
                    timeUp={item.timeUp}
                    commentContent={item.commentContent}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
    }
});

export default CommentComponent;