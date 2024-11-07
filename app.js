// app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const itemsRoutes = require('./routes/items');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());

// Set up routes
app.use('/api/items', itemsRoutes);

module.exports = app;
