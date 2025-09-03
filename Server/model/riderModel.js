const mongoose = require('mongoose');
const riderSchema = require('../Schemas/riderSchema');

const Rider = mongoose.model('Rider', riderSchema);

module.exports = Rider;
