// CartPage.js
import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { Link } from 'react-router-dom';
import './cart.css'


const CartPage = (item) => {
  const { cartItems, removeItem, addToCart, calculateSubtotal,  calculateShippingFee, calculateTotalPrice, subtractFromCart } = useContext(
    CartContext
  );

  const handleRemoveItem = (item) => {
    removeItem(item);
  };

  const handleAddToCart = (item) => {
    addToCart(item);
  };
  const handleRemoveFromCart = (item)=>{
      subtractFromCart(item)
  }
  return (
    <div className='cart-div'>
  <div className="cart-card">
    <h2>My Cart</h2>
    {cartItems.length === 0 ? (
      <p className='empty'>Your cart is empty.</p>
    ) : (
      <div className='my-cart-hold'> {/* Modified div */}
        <div className='my-cart'>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-img">
                <img src={item.image} alt="" />
              </div>
              <div className="names">
                <p className='item-name'>{item.name}</p>
                <p className='item-name'>Quantity: {item.quantity}</p>
                <p className='item-name sub'>Subtotal: ${calculateSubtotal(item)}</p>
                <p>Shipping Fee: ${calculateShippingFee()}</p>
              </div>
              <div className="buttons">
                <div className="remove">
                  <button onClick={() => handleRemoveItem(item)}>X</button>
                  <button className='plus' onClick={() => handleAddToCart(item)}>+</button>
                  <button className='plus' onClick={() => handleRemoveFromCart(item)}>_</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hold">
          <div className="total">
            <p>Total Price: ${calculateTotalPrice(item)}</p>
          </div>
          <Link to='/Checkoutpage' className="total li">
            <div>
              Go To Checkout
            </div>
          </Link>
        </div>
      </div> /* Modified div */
    )}
  </div>
</div>

  );
};

export default CartPage;
