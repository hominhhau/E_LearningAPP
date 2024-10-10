import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type TopNavigationBarProps = {
    onBackPress: () => void;
    onBookmarkPress: () => void;
    onMorePress: () => void;
    titleHeader: string;
};

const TopNavigationBar: React.FC<TopNavigationBarProps> = ({ onBackPress, onBookmarkPress, onMorePress, titleHeader }) => {
    return (
        <View style={styles.container}>
            {/* Icon Back */}
            <TouchableOpacity onPress={onBackPress}>
                <Ionicons name="chevron-back-outline" size={32} color="black" />
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.title}>{titleHeader}</Text>

            {/* Right icons (Bookmark & More) */}
            <View style={styles.rightIcons}>
                <TouchableOpacity onPress={onBookmarkPress}>
                    <Ionicons name="bookmark-outline" size={28} color="black" />
                </TouchableOpacity>

                <TouchableOpacity onPress={onMorePress} style={styles.iconMore}>
                    <Ionicons name="ellipsis-horizontal-outline" size={28} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 50,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    rightIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconMore: {
        marginLeft: 15,
    },
});

export default TopNavigationBar;
