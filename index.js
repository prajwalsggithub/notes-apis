const express = require('express');
const app = express();

// Load environment variables
require('dotenv').config();

// MongoDB connection
require('./config/database').connect();

// Router import
const notesRouter = require('./routes/notes');

// Set up the port
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', notesRouter);

// Test route
app.get('/', (req, res) => {
    res.send("WORKING ..")
});

// Start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

