import React, { useState } from 'react';

const StockInput = ({ addStock }) => {
    const [symbol, setSymbol] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (symbol.trim()) {
            addStock(symbol.toUpperCase()); // Convert input to uppercase
            setSymbol('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Enter stock symbol" 
                value={symbol} 
                onChange={(e) => setSymbol(e.target.value)} 
            />
            <button type="submit" className="btn btn-primary mt-2">Add Stock</button>
        </form>
    );
};

export default StockInput;

