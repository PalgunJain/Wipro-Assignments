const CalculationService = {
    calculateSplits: (expenses, friends) => {
      const friendBalances = {};
  
      friends.forEach((friend) => {
        friendBalances[friend.id] = 0;
      });
  
      expenses.forEach((expense) => {
        const payerId = parseInt(expense.payer);
        const amount = parseFloat(expense.amount);
        const participants = expense.participants.map(Number);
        const splitType = expense.splitType;
        const customSplits = expense.customSplits;
  
        if (participants.length === 0) {
          friendBalances[payerId] += amount;
        } else {
          if (splitType === 'equal') {
            const splitAmount = amount / (participants.length + 1);
            friendBalances[payerId] += amount - splitAmount;
            participants.forEach((participantId) => {
              friendBalances[participantId] -= splitAmount;
            });
          } else if (splitType === 'custom') {
            let totalCustomSplit = 0;
            participants.forEach((participantId) => {
              if (customSplits[participantId]) {
                totalCustomSplit += parseFloat(customSplits[participantId]);
              }
            });
            const payerShare = amount - totalCustomSplit;
            friendBalances[payerId] += payerShare;
            participants.forEach((participantId) => {
              if (customSplits[participantId]) {
                friendBalances[participantId] -= parseFloat(customSplits[participantId]);
              }
            });
          }
        }
      });
  
      const detailedSummary = [];
      Object.keys(friendBalances).forEach((friendId1) => {
        Object.keys(friendBalances).forEach((friendId2) => {
          if (friendId1 !== friendId2) {
            const balance1 = parseFloat(friendBalances[friendId1]);
            const balance2 = parseFloat(friendBalances[friendId2]);
            if (balance1 > 0 && balance2 < 0) {
              const amount = Math.min(balance1, Math.abs(balance2));
              if (amount > 0) {
                const friend1Name = friends.find((f) => f.id === parseInt(friendId1))?.name;
                const friend2Name = friends.find((f) => f.id === parseInt(friendId2))?.name;
                detailedSummary.push({
                  from: friend2Name, 
                  to: friend1Name,   
                  amount: amount.toFixed(2),
                });
              }
            }
          }
        });
      });
  
      return detailedSummary;
    },
  };
  
  export default CalculationService;