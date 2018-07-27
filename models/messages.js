const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating the Schema

const MessageSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Message = mongoose.model('message', MessageSchema);