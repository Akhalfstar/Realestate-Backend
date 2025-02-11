const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
  },
  location: {
    // For geospatial queries
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
    },
  },
  price: {
    type: Number,
    required: true,
  },
  propertyType: {
    type: String,
    enum: ["house", "apartment", "condo", "land", "commercial"],
    required: true,
  },
  status: {
    type: String,
    enum: ["available", "sold", "rented", "pending"],
    default: "available",
  },
  bedrooms: {
    type: Number,
    default: 0,
  },
  bathrooms: {
    type: Number,
    default: 0,
  },
  area: {
    type: Number, // In square feet or meters
  },
  images: [
    {
      type: String, // URLs or paths to the property images
    },
  ],
  features: [
    {
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // Additional fields...
});

PropertySchema.index({ location: "2dsphere" }); // For geospatial queries

module.exports = mongoose.model("Property", PropertySchema);
