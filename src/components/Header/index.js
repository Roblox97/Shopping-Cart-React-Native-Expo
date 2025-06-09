import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaView } from "react-native-safe-area-context";

import { CartContext } from '../../context/CartContext'

export default function Header() {
    const { cart } = useContext(CartContext);
    const navigate = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Lista de produtos</Text>

            <TouchableOpacity onPress={() => navigate.navigate('Cart')}>

                <AntDesign name="shoppingcart" size={24} color="black" />
 
                {cart.length >= 1 && (
                    <View style={styles.amountItens}>
                        <Text style={styles.amountText}>{cart?.length}</Text>
                    </View>
                )}
                

            </TouchableOpacity>

        </SafeAreaView>
    )
}
