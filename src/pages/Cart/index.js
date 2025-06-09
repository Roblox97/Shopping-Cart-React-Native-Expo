import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { CartContext } from '../../context/CartContext';
import CardItem from '../../components/CardItem';

export default function Cart() {
  const { cart, total, addItemCart, removeItemCard } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList 
        data={cart}
        style={{ width: '90%', marginTop: 20 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={( item ) => String(item.id)}
        ListEmptyComponent={() => <Text>Nenhum produto no carrinho</Text>}
        renderItem={ ({ item }) => (
          <CardItem 
            data={item}
            addAmount={() => addItemCart(item)}
            removeAmount={() => removeItemCard(item)}
          />
        )}
        ListFooterComponent={ () => cart.length >= 1 && (
          <Text style={styles.total}>Total:  R$ {total.toFixed(2)}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  total: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20
  }
});
