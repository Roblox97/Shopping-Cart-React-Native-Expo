import React, { useState, createContext } from "react";

export const CartContext = createContext({});

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    function addItemCart(newItem) {
        const indexItem = cart.findIndex((item) => item.id === newItem.id);

        if(indexItem !== -1) {
            // se entrar aqui quer dizer que temos que adicionar mais uma quantidade, por que ele ja existe em cart
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount + 1;
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

            setCart(cartList);
            totalResultCartItem(cartList);
            return;
        }

        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data]);
        totalResultCartItem([...cart, data]);
    }

    function removeItemCard(product) {
        const indexItem = cart.findIndex((item) => item.id === product.id);

        if(cart[indexItem]?.amount > 1) {
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount - 1;

            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;

            setCart(cartList);
            totalResultCartItem(cartList);
            return;
        }

        const removeItem = cart.filter(item => item.id !== product.id);
        setCart(removeItem);
        totalResultCartItem(removeItem);
    }

    function totalResultCartItem(item) {
        let myCart = item;
        let result = myCart.reduce((acc, obj) => { return acc + obj.total }, 0)

        setTotal(result);
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addItemCart,
                removeItemCard,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;