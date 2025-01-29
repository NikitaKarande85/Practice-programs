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

app.get('/getUsers', async (req, res) => {
  try {
    const users = await userModel.find({});
    console.log('Fetched users:', users); // Logs the fetched data
    res.json(users); // Send the fetched data as the response
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).send('Internal Server Error');
  }
});

// API endpoint to update user by ID
app.put('/updateUser/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { firstname, lastname } = req.body; // Assuming the body contains the name and lastname to update

    if (!firstname || !lastname) {
      return res.status(400).send('Name and lastname are required');
    }

    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { firstname, lastname },
      { new: true } // This option ensures the updated document is returned
    );

    if (!updatedUser) {
      return res.status(404).send('User not found');
    }

    res.json(updatedUser); // Send the updated user data as response
  } catch (err) {
    console.error('Error updating user:', err); // Log the error
    res.status(500).send('Internal Server Error');
  }
});

// API endpoint to delete user by ID
app.delete('/deleteUser/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).send('User not found');
    }
    res.send('User deleted');
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Start Server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
