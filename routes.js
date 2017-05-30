'use strict';

var express = require('express');
var router = express.Router();

// GET /questions
// Return all the questions
router.get('/', function(req, res) {
	res.json({
		response: "You sent me a GET request"
	});
});

// POST /questions
// Route for creating a question
router.post('/', function(req, res) {
	res.json({
		response: "You sent me a POST request",
		body: req.body
	});
});

// GET /questions/:id
// Route for specific questions
router.get('/:qID', function(req, res) {
	res.json({
		response: "You sent me a GET request for ID " + req.params.id
	});
});

// POST /questions/:id/answers
// Route for creating a question
router.post('/:qID/answers', function(req, res) {
	res.json({
		response: "You sent me a POST request to /answers",
		questionId: req.params.qID,
		body: req.body
	});
});

// PUT /questions/:qID/answers/:aID
// Edit a specific answer
router.put('/:qID/answers/:aID', function(req, res) {
	res.json({
		response: "You sent me a PUT request to /answers",
		questionId: req.params.qID,
		answersId: req.params.aID,
		body: req.body
	});
});

// DELETE /questions/:qID/answers/:aID
// Delete a specific answer
router.delete('/:qID/answers/:aID', function(req, res) {
	res.json({
		response: "You sent me a DELETE request to /answers",
		questionId: req.params.qID,
		answerId: req.params.aID
	});
});

// POST /questions/:qID/answers/:aID/vote-up
// POST /questions/:qID/answers/:aID/vote-up
// Vote on a specific answer
router.post('/:qID/answers/:aID/vote-:dir', function(req, res, next) {
		if(req.params.dir.search(/^(up|down)$/) === -1) {
			var err = new Error("Not Found");
			err.status = 404;
			next(err);
		} else {
			next();
		}
	}, function(req, res) {
	res.json({
		response: "You sent me a POST request to /vote-" + req.params.dir,
		questionId: req.params.qID,
		answerId: req.params.aID,
		vote: req.params.dir
	});
});

module.exports = router;

