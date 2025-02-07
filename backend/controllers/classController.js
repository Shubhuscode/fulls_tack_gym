const Class = require('../models/classModel');

// Get all classes
const getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.status(200).json(classes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new class
const createClass = async (req, res) => {
  const { title, description, time } = req.body;

  try {
    const newClass = new Class({
      title,
      description,
      time,
    });

    await newClass.save();
    res.status(201).json({ message: 'Class created successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAllClasses, createClass };
