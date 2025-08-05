import React from 'react';

const CartSidebar = ({ cart, isOpen, onClose, removeFromCart, clearCart }) => {
  return (
    <>
      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
      <div className={`cart-sidebar ${isOpen ? 'active' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button id="closeCart" onClick={onClose}>✕</button>
        </div>
        <ul id="cartItemsList">
          {cart.length === 0 ? (
            <li>Your cart is empty</li>
          ) : (
            cart.map((item) => (
              <li key={item.id}>
                <span>{item.title}</span>
                <button onClick={() => removeFromCart(item.id)}>✕</button>
              </li>
            ))
          )}
        </ul>
        <div className="cart-footer">
          <button id="clearCart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;