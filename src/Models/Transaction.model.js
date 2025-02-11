// models/Transaction.js
const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property',
    required: true,
  },
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  salePrice: {
    type: Number,
    required: true,
  },
  transactionType: {
    type: String,
    enum: ['sale', 'rent'],
    required: true,
  },
  transactionDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'cancelled'],
    default: 'pending',
  },
  // Additional fields like contracts, documents, etc.
});

module.exports = mongoose.model('Transaction', TransactionSchema);