import React, { useState, useContext } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Header from '../../components/Header';
import Product from '../../components/Product';

import { CartContext } from '../../context/CartContext';

export default function Home() {
    const { cart, addItemCart } = useContext(CartContext);
    const [products, setProducts] = useState([
        { id: 1, name: "Mouse Gamer", price: 120.99 },
        { id: 2, name: "Teclado Mecânico", price: 250.50 },
        { id: 3, name: "Monitor 24''", price: 899.00 },
        { id: 4, name: "Headset Bluetooth", price: 199.99 },
        { id: 5, name: "Notebook i5", price: 3500.00 },
        { id: 6, name: "Cadeira Gamer", price: 799.90 },
        { id: 7, name: "Webcam HD", price: 150.00 },
        { id: 8, name: "Impressora Multifuncional", price: 650.75 },
        { id: 9, name: "HD Externo 1TB", price: 420.60 },
        { id: 10, name: "Pen Drive 64GB", price: 60.00 }
    ])

    function handleAddCart(item) {
      addItemCart(item);
    }

  return (
    <SafeAreaView style={styles.container}>
        <Header />

        <FlatList 
            style={styles.list}
            data={products}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => 
                <Product 
                    data={item}
                    handleAddCart={() => handleAddCart(item)}
                />
            }
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingEnd: 14,
    paddingStart: 14
  },
});
