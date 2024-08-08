// src/components/Menu.js
import React from 'react';
import burgerImage from '../images/burger.png';
import friesImage from '../images/fries.png';
import sodaImage from '../images/soda.png';

const Menu = ({ items, addToOrder }) => {
  // A function to return the corresponding image based on the item name
  const getImage = (itemName) => {
    switch (itemName) {
      case 'Burger':
        return burgerImage;
      case 'Fries':
        return friesImage;
      case 'Soda':
        return sodaImage;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} style={{ marginBottom: '20px' }}>
            <img src={getImage(item.name)} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => addToOrder(item)} style={{ marginLeft: '10px' }}>Add to Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
