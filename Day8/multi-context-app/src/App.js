import React, { useContext, useState } from 'react';
import { AuthProvider, AuthContext } from './AuthContext';
import { CartProvider, CartContext } from './CartContext';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <MainApp />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

function MainApp() {
  const { user, login, logout } = useContext(AuthContext);
  const { items, addItem, removeItem, clearCart } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [itemName, setItemName] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
  };

  const handleLogout = () => {
    logout();
  };

  const handleAddItem = () => {
    if (itemName) {
      addItem({ id: Date.now(), name: itemName });
      setItemName('');
    }
  };

  const handleRemoveItem = (item) => {
    removeItem(item);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className={`app ${theme}`}>
      <div className="content"> {/* Added a content wrapper */}
        <h1>Multi-Context App</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>

        {user ? (
          <div>
            <p>Logged in as: {user.name}</p>
            <button onClick={handleLogout}>Logout</button>

            <h2>Cart</h2>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  {item.name} (x{item.quantity})
                  <button onClick={() => handleRemoveItem(item)}>Remove</button>
                </li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Item Name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <button onClick={handleAddItem}>Add Item</button>
            <button onClick={handleClearCart}>Clear Cart</button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="login-form"> {/* Added login-form class */}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;