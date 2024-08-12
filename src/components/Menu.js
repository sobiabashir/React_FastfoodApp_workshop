import React from 'react';

const Menu = ({ items, addToOrder, formatCurrency }) => {
  return (
    <div className="menu-grid">
      {items.map(item => (
        <div 
          className="menu-item" 
          key={item.id} 
          onClick={() => addToOrder(item)}
          style={{ backgroundImage: `url(${item.icon})` }}
        >
          <div className="description-box">
            <p>{item.description}</p>
          </div>
          <div className="menu-item-content">
            <h3>{item.name}</h3>
            <p>{formatCurrency(item.price)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
