import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (itemId) => {
        const index = cartItems.findIndex(item => item.id === itemId);
        
        if (index !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems.splice(index, 1);
            setCartItems(updatedCartItems);
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartCount = cartItems.length;

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const contextValue = {
        cartItems,
        cartCount,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalPrice,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};
