const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import uniqueValidator from 'mongoose-unique-validator';
// var findOrCreate = require('mongoose-findorcreate');

const UserSchema = new Schema({
	username: { type: String, required: true, index: true, unique: true },
	password: { type: String, required: true },
	balance: { type: Number, default: 0 },
	portfolio: [{ type: Schema.Types.ObjectId, ref: 'Stock' }],
});

// Unique validator => Prevents duplicate user names
UserSchema.plugin(uniqueValidator);
// UserSchema.plugin(findOrCreate);

module.exports = mongoose.model('User', UserSchema);
