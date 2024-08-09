// src/components/Order.js
import React from 'react';

const Order = ({ orderItems, updateQuantity, totalPrice }) => {
  return (
    <div>
      <h2>Your Order</h2>
      {orderItems.length === 0 ? (
        <p>Your order is empty.</p>
      ) : (
        <ul>
          {orderItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)} x {item.quantity}
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}> - </button>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}> + </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Order;
