const mongoose = require('mongoose');

const riderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mail: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    vehicleType: { type: String, required: true, enum: ['Bike', 'Bicycle', 'Car'] },
    plateNumber: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },
    currentLocation: {
        latitude: { type: Number },
        longitude: { type: Number }
    },
    rating: { type: Number, default: 0 },
    totalDeliveries: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = riderSchema;
