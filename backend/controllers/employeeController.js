import Employee from '../models/employeeModel.js';

export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve employees' });
  }
};

export const createEmployee = async (req, res) => {
  const { name, email, mobile, designation, image } = req.body;

  try {
    const newEmployee = new Employee({ name, email, mobile, designation, image });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create employee' });
  }
};
