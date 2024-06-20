// Load environment variables from the .env file
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import express from 'express';
import User from './models/User.js';

// Get port and MongoDB URI from environment variables
const port = process.env.PORT || 3000;
const uri = process.env.MongoDBURI;

// Connect to MongoDB using Mongoose
mongoose.connect(uri).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Error connecting to MongoDB", err);
});

// Initialize Express application
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Example route to create a new user
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
