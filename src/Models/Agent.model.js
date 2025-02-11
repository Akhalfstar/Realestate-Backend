const mongoose = require('mongoose');

const AgentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  licenseNumber: {
    type: String,
    required: true,
    unique: true,
  },
  agencyName: {
    type: String,
  },
  ratings: {
    type: Number, // Average rating from reviews
    default: 0,
  },
  totalReviews: {
    type: Number,
    default: 0,
  },
  propertiesListed: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Property',
    },
  ],
  // Additional fields...
});

module.exports = mongoose.model('Agent', AgentSchema);