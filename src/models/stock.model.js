const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StockSchema = new Schema({
  name: { type: String, required: true },
	price: { type: Number, required: true },
});

module.exports = mongoose.model('Stock', StockSchema);
