import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect('mongodb://localhost:27017/demo')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Schema and Model
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
});

const userModel = mongoose.model('test', userSchema, 'test');

// Route to Insert Data into MongoDB
app.post('/insertTestData', async (req, res) => {
  const { firstname, lastname } = req.body;

  if (!firstname || !lastname) {
    return res.status(400).json({ message: 'firstname and lastname are required' });
  }

  try {
    // Create a new document using the userModel
    const newUser = new userModel({ firstname, lastname });

    // Save the document to the database
    const savedUser = await newUser.save();

    // Send success response
    res.status(201).json({
      message: 'Data inserted successfully',
      user: savedUser,
    });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({
      message: 'Failed to insert data',
      error: error.message,
    });
  }
});

// Start Server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
