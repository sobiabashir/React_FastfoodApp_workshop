// src/App.js
import React, { useState } from 'react';
import Menu from './components/Menu';
import Order from './components/Order';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
  const [items] = useState([
    { id: 1, name: 'Burger', price: 5.99 },
    { id: 2, name: 'Fries', price: 2.99 },
    { id: 3, name: 'Soda', price: 1.99 },
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
          <Menu items={items} addToOrder={addToOrder} />
        </div>
        <div className="order-container">
          <Order orderItems={orderItems} updateQuantity={updateQuantity} totalPrice={totalPrice} />
        </div>
      </div>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default App;

