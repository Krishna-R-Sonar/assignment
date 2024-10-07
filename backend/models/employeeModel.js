import mongoose from 'mongoose';

const employeeSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  designation: { type: String, required: true },
  image: { type: String },
}, {
  timestamps: true,
});

export default mongoose.model('Employee', employeeSchema);
