const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  targetDate: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'in-progress', 'completed', 'cancelled'], default: 'pending' },
  progress: { type: Number, min: 0, max: 100, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Goal', goalSchema);
