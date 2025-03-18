import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Simple Expense Splitter Dashboard</h1>
      <nav className="dashboard-nav">
        <Link to="/friends">Friends</Link>
        <Link to="/expenses">Expenses</Link>
        <Link to="/summary">Summary</Link>
      </nav>
    </div>
  );
}

export default Dashboard;