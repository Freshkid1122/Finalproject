const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mail: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    userType: { 
        type: String, 
        required: true, 
        enum: ['buyer', 'restaurant', 'rider'] 
    },
    // Restaurant specific fields
    restaurantName: { type: String },
    ownerName: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    // Rider specific fields
    vehicleType: { type: String },
    plateNumber: { type: String },
    // Common fields
    createdAt: { type: Date, default: Date.now }
});

module.exports = userSchema;