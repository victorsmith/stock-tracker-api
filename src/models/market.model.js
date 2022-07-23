const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MarketSchema = new Schema({
  // Use a websocket connection to an API which tracks prices real time
});

module.exports = mongoose.model('Stock', StockSchema);
