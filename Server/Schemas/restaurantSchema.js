const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    ownerName: { type: String, required: true },
    mail: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    restaurantName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    cuisine: { type: String },
    isOpen: { type: Boolean, default: true },
    rating: { type: Number, default: 0 },
    totalOrders: { type: Number, default: 0 },
    deliveryRadius: { type: Number, default: 5 }, // in kilometers
    createdAt: { type: Date, default: Date.now }
});

module.exports = restaurantSchema;
