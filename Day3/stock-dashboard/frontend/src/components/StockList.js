import React from 'react';

const StockList = ({ stocks }) => {
    return (
        <ul className="list-group">
            {stocks.length > 0 ? (
                stocks.map((stock, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {stock.symbol} - ${stock.price}
                    </li>
                ))
            ) : (
                <li className="list-group-item text-center">No stocks added yet</li>
            )}
        </ul>
    );
};

export default StockList;

