const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');  // Ensure body parsing is included

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());  //update

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/demo')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define the schema
const userSchema = new mongoose.Schema({
  name: String,
  city: String,
});

// Create the model with the collection name 'test'
const userModel = mongoose.model('test', userSchema, 'test');

// API endpoint to insert test data
app.get('/insertTestData', async (req, res) => {
  try {
    const user = new userModel({
      name: 'Omkar',
      city: 'Mumbai',
    });
    await user.save();
    res.send('Test data inserted');
  } catch (err) {
    console.error('Error inserting data:', err);
    res.status(500).send('Internal Server Error');
  }
});

// API endpoint to fetch users
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
    const { name, city } = req.body; // Assuming the body contains the name and city to update

    if (!name || !city) {
      return res.status(400).send('Name and City are required');
    }

    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { name, city },
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

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
