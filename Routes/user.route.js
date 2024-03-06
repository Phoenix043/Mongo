const express=require("express");
const userRouter=express.Router()
const User = require("../models/user");




// Create a new user
userRouter.post('/', async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get all users
  userRouter.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get a user by ID
  userRouter.get('/users/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Update a user by ID using PUT (Full Update)
  userRouter.put('/users/:id', async (req, res) => {
      try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedUser);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
    
    // Update a user by ID using PATCH (Partial Update)
    userRouter.patch('/users/:id', async (req, res) => {
      try {
        const user = await User.findById(req.params.id);
    
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        // Apply only the fields provided in the request body
        Object.assign(user, req.body);
    
        // Save the updated user
        const updatedUser = await user.save();
    
        res.json(updatedUser);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
    
    
  
  // Delete a user by ID
  userRouter.delete('/users/:id', async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  module.exports={userRouter}