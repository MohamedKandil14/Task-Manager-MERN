const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const protect = require('../Middleware/auth');


// Get all tasks for the authenticated user
router.get('/', protect, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new task
router.post('/', protect, async (req, res) => {
  const { title, description } = req.body;

  try {
    const task = new Task({
      title,
      description,
      user: req.user._id,
    });

    const createdTask = await task.save();
    res.status(201).json(createdTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single task
router.get('/:id', protect, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (task && task.user.toString() === req.user._id.toString()) {
      res.json(task);
    } else {
      res.status(404).json({ message: 'Task not found or unauthorized' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a task
router.put('/:id', protect, async (req, res) => {
  const { title, description, status } = req.body;

  try {
    const task = await Task.findById(req.params.id);

    if (task && task.user.toString() === req.user._id.toString()) {
      task.title = title || task.title;
      task.description = description || task.description;
      task.status = status || task.status;

      const updatedTask = await task.save();
      res.json(updatedTask);
    } else {
      res.status(404).json({ message: 'Task not found or unauthorized' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a task
router.delete('/:id', protect, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (task && task.user.toString() === req.user._id.toString()) {
      await Task.deleteOne({ _id: req.params.id });
      res.json({ message: 'Task removed' });
    } else {
      res.status(404).json({ message: 'Task not found or unauthorized' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;