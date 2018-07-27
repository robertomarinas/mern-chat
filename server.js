const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => {
		console.log('Mongo Database Connected..');
	})
	.catch(err => console.log(err));

// Import Routes
const messages = require('./routes/api/messages');

// Set Routes
app.use('/api/messages', messages);

app.listen(port);

console.log(`listening on port ${port}`);
