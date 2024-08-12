import React from 'react';


const Order = ({ orderItems, updateQuantity, totalPrice }) => {

  
  const handleInputChange = (id, newQuantity) => {
    const quantity = Math.max(0, Number(newQuantity)); 
    updateQuantity(id, quantity);
  };

  return (
    <div className="order-container">
      <h2>Your Order</h2>
      {orderItems.length === 0 ? (
        <p>Your order is empty.</p>
      ) : (
        <ul>
          {orderItems.map(item => (
            <li key={item.id}>
              <span>{item.name} -  {item.price.toFixed(2)} Kr.</span>
              <span>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}> - </button>
                
               
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleInputChange(item.id, e.target.value)}
                  style={{ width: '50px', textAlign: 'center', margin: '0 10px' }}
                  min="0"
                />
                
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}> + </button>
              </span>
            </li>
          ))}
        </ul>
      )}
      <h3>Total:  {totalPrice.toFixed(2)} Kr.</h3>
    </div>
  );
};

export default Order;
