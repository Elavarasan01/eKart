import React from 'react';
import { useCart } from '../components/contextApi';
import Header from './Header';

function CartDetails() {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <>
      <Header />
      <div className="cart-details">
        <h2>Cart Details</h2>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} style={{ maxWidth: '100px' }} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div>
                  <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="total-price">
          <h3>Total Price:</h3>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}

export default CartDetails;