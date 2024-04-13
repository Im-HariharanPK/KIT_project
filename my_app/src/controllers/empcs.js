const Employee = require('../models/Employee');

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.render('employees', { employees });
  } catch (error) {
    res.status(500).send('Error retrieving employees');
  }
};

// Add other controller functions for CRUD operations

module.exports = {
  getAllEmployees,
  // Add other controller functions
};
