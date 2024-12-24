const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

// Environment variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to Bridge App!');
});

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
