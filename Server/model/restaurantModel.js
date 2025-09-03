const mongoose = require('mongoose');
const restaurantSchema = require('../Schemas/restaurantSchema');

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
