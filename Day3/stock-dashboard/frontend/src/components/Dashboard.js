import React, { useState, useEffect } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import StockInput from "./StockInput";
import StockList from "./StockList";
import ThemeToggle from "./ThemeToggle";
import "bootstrap/dist/css/bootstrap.min.css";

const socket = io("http://localhost:5000", { transports: ["websocket"] });

const Dashboard = () => {
    const [stock, setStock] = useState(""); // Stock input value
    const [stockPrice, setStockPrice] = useState(null); // Latest stock price
    const [previousSearches, setPreviousSearches] = useState([]); // Search history
    const [error, setError] = useState(null); // Error state

    // ✅ Fetch Stock Price from API
    const fetchStockPrice = async () => {
        if (!stock) return;
        try {
            setError(null); // Reset error before fetching
            const API_KEY = process.env.REACT_APP_API_KEY; // ✅ Get API Key from .env
            const response = await axios.get(
                `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=${API_KEY}`
            );

            // ✅ Extract price from API response
            const stockData = response.data["Global Quote"];
            if (stockData && stockData["05. price"]) {
                setStockPrice(stockData["05. price"]);
            } else {
                setError("Invalid API response. Please try again.");
                console.error("Invalid API response", response.data);
            }

            // ✅ Store the stock in previous searches
            setPreviousSearches((prev) => [...prev, stock]);
        } catch (error) {
            console.error("Error fetching stock data", error);
            setError("Network error. Please check your internet or API key.");
        }
    };

    // ✅ WebSocket Handling (ComponentDidMount Equivalent)
    useEffect(() => {
        console.log("Component Mounted: Connecting to WebSocket...");
        
        socket.on("connect", () => {
            console.log("WebSocket Connected ✅");
        });

        socket.on("stockPriceUpdate", (data) => {
            console.log("Stock Update Received:", data);
            if (data.symbol === stock) {
                setStockPrice(data.price);
            }
        });

        return () => {
            console.log("Component Unmounted: Disconnecting WebSocket...");
            socket.disconnect();
        };
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center">📈 Real-Time Stock Dashboard</h2>
            <ThemeToggle />
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    placeholder="Enter Stock Symbol (e.g., AAPL)"
                />
                <button className="btn btn-primary" onClick={fetchStockPrice}>
                    Get Price
                </button>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            {stockPrice !== null && (
                <div className="alert alert-info">
                    Current Price: <strong>${stockPrice}</strong>
                </div>
            )}

            <h4>Previous Searches:</h4>
            <ul className="list-group">
                {previousSearches.map((s, index) => (
                    <li key={index} className="list-group-item">{s}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
