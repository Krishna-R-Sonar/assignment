import express from 'express';
import { getEmployees, createEmployee } from '../controllers/employeeController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getEmployees);
router.post('/', protect, createEmployee);

export default router;
