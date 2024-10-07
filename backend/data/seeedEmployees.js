import Employee from '../models/employeeModel.js';
import connectDB from '../config/db.js';

const employees = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    mobile: '1234567890',
    designation: 'Software Engineer',
    image: '/images/john.png',
  },
  // Additional seed data
];

const seedEmployees = async () => {
  try {
    await connectDB();
    await Employee.deleteMany();
    await Employee.insertMany(employees);
    console.log('Employees seeded');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedEmployees();
