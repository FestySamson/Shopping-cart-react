import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';



const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);

    const  calculateItemTotalPrice = (item) => {
    return item.sales * item.quantity;
  };

  const calculateCartTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + calculateItemTotalPrice(item),
      0
    );
  };

  const handleCheckout = () => {
    // Perform the checkout logic here
    // For simplicity, let's just log the cart items and total price
    console.log('Cart Items:', cartItems);
    console.log('Total Price:', calculateCartTotalPrice());

    // After checkout, you can clear the cart or perform any other necessary actions
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.sales}</p>
                <p>Item Total Price: ${calculateItemTotalPrice(item)}</p>
              </li>
            ))}
          </ul>
          <p>Total Cart Price: ${calculateCartTotalPrice()}</p>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
