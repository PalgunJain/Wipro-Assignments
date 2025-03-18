import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const users = {
    'admin': { id: 1, name: 'admin', password: 'admin123' },
    'Palgun': { id: 2, name: 'Palgun', password: 'password123' },
  };

  const login = (username, password) => {
    const userData = users[username];
    if (userData && userData.password === password) {
      setUser(userData);
    } else {
      alert('Invalid username or password.');
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};