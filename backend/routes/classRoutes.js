const express = require('express');
const { getAllClasses, createClass } = require('../controllers/classController');
const router = express.Router();

// Get all classes
router.get('/', getAllClasses);

// Create a new class
router.post('/', createClass);

module.exports = router;
