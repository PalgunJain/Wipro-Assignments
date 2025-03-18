import React, { useState, useEffect } from 'react';
import ExpenseService from '../services/ExpenseService';
import FriendService from '../services/FriendService';
import { Link } from 'react-router-dom';
import './ExpenseList.css';

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [friends, setFriends] = useState([]);
  const [newExpense, setNewExpense] = useState({
    amount: '',
    description: '',
    payer: '',
    participants: [],
    customSplits: {},
    splitType: 'equal',
  });
  const [editingExpenseId, setEditingExpenseId] = useState(null);
  const [editedExpense, setEditedExpense] = useState(null);

  useEffect(() => {
    setExpenses(ExpenseService.getExpenses());
    setFriends(FriendService.getFriends());
  }, []);

  const handleAddExpense = () => {
    if (newExpense.amount && newExpense.description && newExpense.payer) {
      ExpenseService.addExpense(newExpense);
      setExpenses(ExpenseService.getExpenses());
      setNewExpense({
        amount: '',
        description: '',
        payer: '',
        participants: [],
        customSplits: {},
        splitType: 'equal',
      });
    }
  };

  const handleParticipantChange = (friendId) => {
    if (newExpense.participants.includes(friendId)) {
      setNewExpense({
        ...newExpense,
        participants: newExpense.participants.filter((id) => id !== friendId),
      });
    } else {
      setNewExpense({
        ...newExpense,
        participants: [...newExpense.participants, friendId],
      });
    }
  };

  const handleCustomSplitChange = (friendId, amount) => {
    setNewExpense({
      ...newExpense,
      customSplits: {
        ...newExpense.customSplits,
        [friendId]: amount,
      },
    });
  };

  const handleEditExpense = (expense) => {
    setEditingExpenseId(expense.id);
    setEditedExpense({
      ...expense,
      customSplits: { ...expense.customSplits },
      splitType: expense.splitType,
    });
  };

  const handleSaveExpense = (id) => {
    ExpenseService.updateExpense(id, editedExpense);
    setExpenses(ExpenseService.getExpenses());
    setEditingExpenseId(null);
    setEditedExpense(null);
  };

  const handleDeleteExpense = (id) => {
    ExpenseService.deleteExpense(id);
    setExpenses(ExpenseService.getExpenses());
  };

  const handleSplitTypeChange = (type) => {
    setNewExpense({ ...newExpense, splitType: type });
  };

  return (
    <div className="expense-list">
      <nav className="expense-list-nav">
        <Link to="/">Dashboard</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/summary">Summary</Link>
      </nav>
      <div className="expense-list-content">
        <h2>Expenses</h2>
        <div className="expense-form">
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              value={editingExpenseId === null ? newExpense.amount : editedExpense?.amount || ''}
              onChange={(e) =>
                editingExpenseId === null
                  ? setNewExpense({ ...newExpense, amount: e.target.value })
                  : setEditedExpense({ ...editedExpense, amount: e.target.value })
              }
              placeholder="Amount"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={editingExpenseId === null ? newExpense.description : editedExpense?.description || ''}
              onChange={(e) =>
                editingExpenseId === null
                  ? setNewExpense({ ...newExpense, description: e.target.value })
                  : setEditedExpense({ ...editedExpense, description: e.target.value })
              }
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="payer">Select Payer:</label>
            <select
              id="payer"
              value={editingExpenseId === null ? newExpense.payer : editedExpense?.payer || ''}
              onChange={(e) =>
                editingExpenseId === null
                  ? setNewExpense({ ...newExpense, payer: e.target.value })
                  : setEditedExpense({ ...editedExpense, payer: e.target.value })
              }
            >
              <option value="">Select Payer</option>
              {friends.map((friend) => (
                <option key={friend.id} value={friend.id}>
                  {friend.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Split Type:</label>
            <div className="split-options">
              <label>
                <input
                  type="radio"
                  value="equal"
                  checked={newExpense.splitType === 'equal'}
                  onChange={() => handleSplitTypeChange('equal')}
                />
                Equal Splits
              </label>
              <label>
                <input
                  type="radio"
                  value="custom"
                  checked={newExpense.splitType === 'custom'}
                  onChange={() => handleSplitTypeChange('custom')}
                />
                Custom Splits
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Split With:</label>
            {friends.map((friend) => (
              <div key={friend.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={
                      editingExpenseId === null
                        ? newExpense.participants.includes(friend.id)
                        : editedExpense?.participants.includes(friend.id) || false
                    }
                    onChange={() =>
                      editingExpenseId === null
                        ? handleParticipantChange(friend.id)
                        : setEditedExpense({
                            ...editedExpense,
                            participants: editedExpense?.participants.includes(friend.id)
                              ? editedExpense?.participants.filter((id) => id !== friend.id)
                              : [...(editedExpense?.participants || []), friend.id],
                          })
                    }
                  />
                  {friend.name}
                </label>
                {newExpense.splitType === 'custom' && (
                  <input
                    type="number"
                    placeholder="Custom Amount"
                    value={newExpense.customSplits[friend.id] || ''}
                    onChange={(e) => handleCustomSplitChange(friend.id, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>
          {editingExpenseId === null ? (
            <button onClick={handleAddExpense}>Add Expense</button>
          ) : (
            <button onClick={() => handleSaveExpense(editingExpenseId)}>Save Expense</button>
          )}
        </div>
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              {expense.description} - ${expense.amount}
              <button onClick={() => handleEditExpense(expense)}>Edit</button>
              <button onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExpenseList;