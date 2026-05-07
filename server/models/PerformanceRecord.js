const mongoose = require('mongoose');

const performanceRecordSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  kpiMetrics: {
    productivity: { type: Number, min: 0, max: 100, required: true },
    quality: { type: Number, min: 0, max: 100, required: true },
    reliability: { type: Number, min: 0, max: 100, required: true },
    collaboration: { type: Number, min: 0, max: 100, required: true }
  },
  feedback: { type: String, required: true },
  overallScore: { type: Number, required: true },
  reviewDate: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('PerformanceRecord', performanceRecordSchema);
