import React, { useState } from 'react';
import Menu from './components/Menu';
import Order from './components/Order';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

import burgerIcon from './images/burger-icon.jpg';
import friesIcon from './images/fries-icon.jpg';
import drinkIcon from './images/drink-icon.jpg';
import pizzaIcon from './images/pizza-icon.jpg';
import pastaIcon from './images/pasta-icon.jpg';


const App = () => {
  const [items] = useState([
    { id: 1, name: 'Burger', price: 64.99, description: 'Juicy grilled burgers with lettuce and tomato.', icon: burgerIcon},
    { id: 2, name: 'Fries', price: 32.99, description: 'Crispy golden fries.', icon: friesIcon },
    { id: 3, name: 'Drink', price: 21.99, description: 'Refreshing soft drink.', icon: drinkIcon },
    { id: 4, name: 'Pizza', price: 98.99, description: 'Delicious cheese pizza with a crispy crust.', icon: pizzaIcon },
    { id: 5, name: 'Pasta', price: 88.99, description: 'Creamy pasta with garlic bread.', icon: pastaIcon },
  ]);

  const [orderItems, setOrderItems] = useState([]);
  const [theme, setTheme] = useState('light');

  const addToOrder = (item) => {
    const existingItem = orderItems.find((orderItem) => orderItem.id === item.id);
    if (existingItem) {
      setOrderItems(orderItems.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      ));
    } else {
      setOrderItems([...orderItems, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      setOrderItems(orderItems.filter((orderItem) => orderItem.id !== id));
    } else {
      setOrderItems(orderItems.map((orderItem) =>
        orderItem.id === id ? { ...orderItem, quantity: newQuantity } : orderItem
      ));
    }
  };

  const totalPrice = orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
   
  const formatCurrencySEK = (amount) => {
    return new Intl.NumberFormat('sv-SE', {
      style: 'currency',
      currency: 'SEK',
    }).format(amount);
  };


  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <i className="fas fa-utensils app-icon"></i>
        <h1 className="app-title">Feeling hungry..Don't worry just click.....</h1>
      </header>
      <div className="container">
        <div className="menu-container">
        <Menu items={items} addToOrder={addToOrder} formatCurrency={formatCurrencySEK} />
      
        </div>
        <div className="order-container">
        <Order orderItems={orderItems} updateQuantity={updateQuantity} totalPrice={totalPrice} formatCurrency={formatCurrencySEK} />
      
        </div>
      </div>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default App;
