import React, { useState, useEffect } from 'react';
import ExpenseService from '../services/ExpenseService';
import CalculationService from '../services/CalculationService';
import FriendService from '../services/FriendService';
import { Link } from 'react-router-dom';
import './ExpenseSummary.css';

function ExpenseSummary() {
  const [expenses, setExpenses] = useState([]);
  const [friends, setFriends] = useState([]);
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    const fetchExpensesAndFriends = () => {
      const fetchedExpenses = ExpenseService.getExpenses();
      const fetchedFriends = FriendService.getFriends();
      setExpenses(fetchedExpenses);
      setFriends(fetchedFriends);
    };

    fetchExpensesAndFriends();
  }, []);

  useEffect(() => {
    console.log('Expenses updated:', expenses);
    console.log('Friends updated:', friends);
    if (expenses.length > 0 && friends.length > 0) {
      const calculatedSummary = CalculationService.calculateSplits(expenses, friends);
      setSummary(calculatedSummary);
      console.log('Summary updated:', calculatedSummary);
    } else {
      setSummary([]);
    }
  }, [expenses, friends]);

  return (
    <div className="expense-summary">
      <nav className="expense-summary-nav">
        <Link to="/">Dashboard</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
      <div className="expense-summary-content">
        <h2>Expense Summary</h2>
        {summary && summary.length > 0 ? (
          <ul>
            {summary.map((item) => (
              <li key={`${item.from}-${item.to}-${item.amount}`}>
                {item.from} owes {item.to} ${item.amount}
              </li>
            ))}
          </ul>
        ) : (
          <p>No expense summary available.</p>
        )}
      </div>
    </div>
  );
}

export default ExpenseSummary;