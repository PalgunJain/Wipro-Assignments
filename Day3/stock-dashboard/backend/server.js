// Load environment variables from .env file
require("dotenv").config();

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const axios = require("axios");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

app.use(cors());

// ✅ Use an environment variable for PORT
const PORT = process.env.PORT || 5000;

// ✅ Function to fetch real stock prices (Replace with actual API)
const fetchStockPrice = async (symbol) => {
    try {
        // Replace this with a real stock API (e.g., Alpha Vantage, Yahoo Finance)
        const response = await axios.get(`https://api.example.com/stock/${symbol}`);
        return response.data.price;
    } catch (error) {
        console.error("Error fetching stock price:", error);
        return null;
    }
};

// ✅ Handle WebSocket Connections
io.on("connection", (socket) => {
    console.log("Client connected");

    // Listen for stock subscription requests from the frontend
    socket.on("subscribeToStock", async (symbol) => {
        console.log(`Subscribed to stock: ${symbol}`);

        // Fetch initial stock price
        const price = await fetchStockPrice(symbol);
        socket.emit("stockPriceUpdate", { symbol, price });

        // Send updated stock prices every 5 seconds
        setInterval(async () => {
            const updatedPrice = await fetchStockPrice(symbol);
            socket.emit("stockPriceUpdate", { symbol, price: updatedPrice });
        }, 5000);
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

// ✅ Start the Server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
