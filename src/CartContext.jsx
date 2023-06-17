import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);


  // Add to Cart Function
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
  
    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, quantity: 1 },
      ]);
    }
  
    setCartCount((prevCount) => prevCount + 1);
  };

  // Remove from cart function
  
  const removeItem = (item) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  //Remove from cart function
  const subtractFromCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem.quantity === 1) {
      setCartItems((prevCartItems) =>
        prevCartItems.filter((cartItem) => cartItem.id !== item.id)
      );
    } else {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };
  
  //Calculating the total price
  const calculateSubtotal = (item) => {
    return item.sales * item.quantity;
  };


    //Shipping
  const calculateShippingFee = (totalPrice) => {
    if(totalPrice ==0){
      return 0
    }else if (totalPrice < 1000) {
      return 100;
    } else if (totalPrice >= 1000 && totalPrice < 3000) {
      return 200;
    } else if (totalPrice >= 3000 && totalPrice < 5000) {
      return 300;
    } else {
      return 0; // Free shipping
    }
  };

  const calculateTotalPrice = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + calculateSubtotal(item),
      0
    );

    const shippingFee = calculateShippingFee(subtotal);

    return subtotal + shippingFee;
  };

  

  
  

  

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeItem, calculateShippingFee, calculateSubtotal, calculateTotalPrice, subtractFromCart }}
    >{children}
    </CartContext.Provider>
  );
};
