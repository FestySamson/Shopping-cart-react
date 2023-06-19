import React, { useContext, useState } from 'react';
import { CartContext } from '../../CartContext';
import './checkout.css'

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone:'',
  });

  const calculateItemTotalPrice = (item) => {
    return item.sales * item.quantity;
  };

  const calculateCartTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + calculateItemTotalPrice(item),
      0
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckout = () => {
    // Perform the checkout logic here
    // For simplicity, let's just log the cart items, total price, and form data
    console.log('Cart Items:', cartItems);
    console.log('Total Price:', calculateCartTotalPrice());
    console.log('Form Data:', formData);

    // After checkout, you can clear the cart or perform any other necessary actions
  };

  return (
    <div className='check'>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="bill">
          <div className="form">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
            />
             <input
              type="text"
              name="telephone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
            />

          </div>
          
          <div className="pro">
            
           <div className="form-inputs">
            <p>First Name: {formData.firstName}</p>
            <p>Last Name: {formData.lastName}</p>
            <p>Email: {formData.email}</p>
            <p>Address: {formData.address}</p>
            <p>Phone Number:{formData.phone}</p>
           </div>
           <div className="ff">
              <p>Total Cart Price: ${calculateCartTotalPrice()}</p>
              <img src="/Images/card.png" alt="" />
              <button onClick={handleCheckout}>Make Payment</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
