// Import necessary packages
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import cors

// Import utility function to connect to the database
import connectDB from './config/db.js';

// Load environment variables from a .env file
dotenv.config();

// Define the port for the server to listen on
const port = process.env.PORT || 4000;

// Connect to the database
connectDB();

// Create an instance of the Express application
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Middleware to parse incoming URL-encoded data
app.use(express.urlencoded({extended: true}));

// Middleware to parse cookies
app.use(cookieParser());

// Use cors middleware
app.use(cors()); // Use cors

// Define a Mongoose schema for the responses
const responseSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Define a Mongoose model for the responses
const Response = mongoose.model('Response', responseSchema);

// Define a route to handle form submissions
app.post('/submit', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Connect to the database
    const db = await connectDB();

    // Insert the form data into the database
    const [result] = await db.execute(
      'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );

    res.json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form', error);
    res.status(500).json({ message: 'Error submitting form' });
  }
});

// Define a route that sends "Hello World" as a response
app.get("/", (req, res) => {
    res.send("welcome to the server!");
})

// Start the server and listen on the defined port
app.listen(port, () => console.log(`server running on port: ${port}`));