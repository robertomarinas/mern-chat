const express = require('express');
const router = express.Router();

// Message Model
const Message = require('../../models/messages');

// Creating Routes
// GET
router.get('/', (req, res) => {
	Message.find()
		.sort({ date: 1 })
		.then(messages => res.json(messages))
});

// POST
router.post('/', (req, res) => {
	const msg = new Message({
		name: req.body.name,
		message: req.body.message
	});

	msg.save()
		.then(msg => res.json(msg));
});

// DELETE
router.delete('/:id', (req, res) => {
	Message.findById(req.params.id)
		.then(msg => msg.remove()
		.then(() => res.json({ succes: true })))
		.catch(err => res.status(404).json({ success: false }))
});

module.exports = router;