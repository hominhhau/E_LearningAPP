import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ArrowBack from '@/components/Button/Arrow-back';

const Cart: React.FC = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ArrowBack onPress={() => {console.log('Back')}} />
                <Text style={styles.textHeader}>Your Cart</Text>
            </View>
            <View style={styles.courseCart}>
                <Text style={styles.countSum}>... item in your cart</Text>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20,
    },
    headerContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHeader:{
        fontSize: 24,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    courseCart:{
        marginTop: 20,

    },
    countSum:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00bdd6',
    }

});

export default Cart;

