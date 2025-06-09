import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 18,
        paddingTop: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    amountItens: {
        position: 'absolute',
        top: -8,
        right: -8,
        backgroundColor: '#f01',
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99
    },
    amountText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold'
    }
});

export default styles;