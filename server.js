import express from 'express';
// import dotenv from 'dotenv';

// dotenv.config();

const PORT =  3005;

// Initialize express

const app = express();

import booksRoutes from './routes/books.js'

// Parse body

app.use(express.json());

// Use routes

app.use('/api/books', booksRoutes);

// Listen

app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`)
});



