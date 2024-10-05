import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type ArrowBackProps = {
    onPress: () => void;
}

const ArrowBack: React.FC<ArrowBackProps> = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Ionicons name="arrow-back-outline" size={32} color="black" />
        </TouchableOpacity>
    );
}
export default ArrowBack;
