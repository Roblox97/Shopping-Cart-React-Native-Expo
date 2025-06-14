import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function Product({ data, handleAddCart }) {
 return (
   <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.price}>R$ {data.price}</Text>
        </View>
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAddCart}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#dfdfdf',
    borderRadius: 2,
    marginBottom: 14,
    padding: 8,
    paddingBottom: 14,
    paddingTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: 'bold'
  },
  buttonAdd: {
    paddingStart: 12,
    paddingEnd: 12,
    backgroundColor: '#16fff0',
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 4
  }
});
