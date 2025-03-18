import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import FriendList from './components/FriendList';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/friends" element={<FriendList />} />
        <Route path="/expenses" element={<ExpenseList />} />
        <Route path="/summary" element={<ExpenseSummary />} />
      </Routes>
    </div>
  );
}

export default App;