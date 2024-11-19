import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type AddToCartProps = {
    icon: any;
    text: string;
    backgroundColor?: string;
    textColor?: string;
    price: string;
    discountPrice: string;
    onPress?: () => void;
}

const AddToCart: React.FC<AddToCartProps> = ({
    icon,
    text,
    backgroundColor = '#00bdd6',
    textColor = '#ffffff',
    price,
    discountPrice,
    onPress
}) => {
    return (
        <View style={styles.container}>
            {/* Price and discount */}
            <View style={styles.priceContainer}>
                <Text style={styles.priceText}>{price}</Text>
                <Text style={styles.discountText}>{discountPrice}</Text>
            </View>
            {/* Add to cart button */}
            <TouchableOpacity
                style={[styles.button, { backgroundColor }]}
                onPress={onPress}
            >
                <Ionicons name={icon} size={18} color={textColor} />
                <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderTopWidth: 1, // Border chỉ phía trên
        borderTopColor: '#ccc', // Màu border
    },
    priceContainer: {
        flexDirection: 'column',
    },
    priceText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    discountText: {
        fontSize: 14,
        color: '#888',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
    },
    buttonText: {
        marginLeft: 8,
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default AddToCart;
