import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Category from './Categories';

const CategoryComponent: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Categories</Text>
                <TouchableOpacity onPress={() => console.log('View more Pressed')}>
                    <Text style={styles.viewMore}>View more</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.columnContainer}>
                <View style={styles.column}>
                    <Category 
                        icon="trending-up-outline" 
                        title="Business" 
                        backgroundColor="#00BCD4" 
                        onPress={() => console.log('Business Pressed')}
                    />
                    <Category 
                        icon="code-outline"
                        title="Code" 
                        backgroundColor="#e05858"
                        onPress={() => console.log('Code Pressed')}
                    />
                    <Category 
                        icon="videocam-outline"
                        title="Movie" 
                        backgroundColor="#8252e3"
                        onPress={() => console.log('Video Pressed')}
                    />
                </View>
                <View style={styles.column}>
                    <Category 
                        icon="brush-outline"
                        title="Design" 
                        backgroundColor="#8252e3"
                        onPress={() => console.log('Design Pressed')}
                    />
                    <Category 
                        icon="document-text-outline"
                        title="Writing" 
                        backgroundColor="#3f6ae9"
                        onPress={() => console.log('Writing Pressed')}
                    />
                    <Category 
                        icon="earth-outline"
                        title="Language" 
                        backgroundColor="#ec7d2d"
                        onPress={() => console.log('Language Pressed')}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    viewMore: {
        fontSize: 14,
        color: '#00BCD4',
    },
    columnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        flex: 1,
        paddingHorizontal: 10,
    },
});

export default CategoryComponent;
