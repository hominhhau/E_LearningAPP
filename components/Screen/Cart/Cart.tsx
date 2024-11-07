import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ArrowBack from '@/components/Button/Arrow-back';

const Cart: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ArrowBack onPress={() => {console.log('Back')}} />
                <Text style={styles.textHeader}>Your Cart</Text>
            </View>
            <View style={styles.courseCart}>
                <Text style={styles.countSum}>... item(s) in your cart</Text>
            </View>
            <View style={styles.discountContainer}>
                <TextInput
                    style={styles.discountInput}
                    placeholder="Enter code"
                />
                <TouchableOpacity style={styles.applyButton} onPress={() => {console.log('Apply')}}>
                    <Text style={styles.applyText}>Apply</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.paymentSummary}>
                <Text style={styles.paymentText}>Payment Summary</Text>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Order Total</Text>
                    <Text style={styles.summaryValue}>0</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Items Discount</Text>
                    <Text style={styles.summaryValue}>0</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Coupon Discount</Text>
                    <Text style={styles.summaryValue}>0</Text>
                </View>
                <View style={styles.totalRow}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalValue}>$0</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 100,
    },
    courseCart: {
        marginTop: 20,
    },
    countSum: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00bdd6',
    },
    discountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    discountInput: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#00bdd6',
        borderRadius: 5,
        marginRight: 10,
    },
    applyButton: {
        backgroundColor: '#a25ddc',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    applyText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    paymentSummary: {
        marginTop: 30,
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        elevation: 1,
    },
    paymentText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    summaryLabel: {
        fontSize: 16,
        color: '#555',
    },
    summaryValue: {
        fontSize: 16,
        color: '#555',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingTop: 10,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    totalValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e60000',
    },
});

export default Cart;
