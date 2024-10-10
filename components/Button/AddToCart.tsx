import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from './AddToCart.style';

type AddToCartProps = {
    icon: string;
    text: string;
    backgroundColor?: string;
    textColor?: string;
    width?: number;
}

const AddToCart: React.FC<AddToCartProps> = ({ 
    icon,
    text,
    backgroundColor = '#00bdd6',
    textColor = '#ffffff',
    width = 100,
  
}) => {
    return (
        <TouchableOpacity style={[style.button, { backgroundColor, width }]}>
            <Ionicons name={icon as any} size={24} color={textColor} />
            <Text style={[style.text, { color: textColor }]}>{text}</Text>
        </TouchableOpacity>   
    );
}

export default AddToCart;
