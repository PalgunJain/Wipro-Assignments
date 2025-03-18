const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample User Data
let users = [{ id: 1, name: "Palgun Jain V" }];

// GET API - Fetch Users
app.get('/users', (req, res) => {
    res.json(users);
});

// POST API - Add User
app.post('/users', (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.json(newUser);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
