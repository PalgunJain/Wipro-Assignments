let expenses = [];
let nextExpenseId = 1;

const ExpenseService = {
  getExpenses: () => {
    return [...expenses];
  },

  addExpense: (expense) => {
    const newExpense = { ...expense, id: nextExpenseId++ };
    expenses.push(newExpense);
    return newExpense;
  },

  updateExpense: (id, updatedExpense) => {
    expenses = expenses.map((expense) =>
      expense.id === id ? { ...updatedExpense, id } : expense
    );
    return expenses.find((expense) => expense.id === id);
  },

  deleteExpense: (id) => {
    expenses = expenses.filter((expense) => expense.id !== id);
  },
};

export default ExpenseService;