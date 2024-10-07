import User from '../models/userModel.js';
import { validateLogin } from '../utils/validators.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  const { username, password } = req.body;
  const validationError = validateLogin(username, password);

  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  const user = await User.findOne({ username });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    return res.json({ token, username: user.username });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
};
