var async = require('async'),
	keystone = require('keystone');

var Post = keystone.list('Post');

/**
 * List Posts
 */
exports.list = function(req, res) {
	Post.model.find(function(err, items) {
		
		if (err) return res.status(500).send({ msg: 'database error', err: err });
		
		res.json(items);

	});
}

/**
 * Get Post by ID
 */
exports.get = function(req, res) {
	Post.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.status(500).send({ msg: 'database error', err: err });
		if (!item) return res.status(401).send({ msg: 'not found' });
		
		res.json(item);
		
	});
}


/**
 * Create a Post
 */
exports.create = function(req, res) {
	
	var item = new Post.model(),
		data = (req.method == 'POST') ? req.body : req.query;
	
	item.getUpdateHandler(req).process(data, function(err) {
		
		if (err) return res.status(500).send('error', err);
		
		res.json(item);
		
	});
}

/**
 * Get Post by ID
 */
exports.update = function(req, res) {
	Post.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.status(500).send({ msg: 'database error', err: err });
		if (!item) return res.status(401).send({ msg: 'not found' });
		
		var data = (req.method == 'POST') ? req.body : req.query;
		
		item.getUpdateHandler(req).process(data, function(err) {
			
			if (err) return res.status(500).send('create error', err);
			
			res.json(item);
			
		});
		
	});
}

/**
 * Delete Post by ID
 */
exports.remove = function(req, res) {
	Post.model.findById(req.params.id).exec(function (err, item) {
		
		if (err) return res.status(500).send({ msg: 'database error', err: err });
		if (!item) return res.status(401).send({ msg: 'not found' });
		
		item.remove(function (err) {
			if (err) return res.status(500).send({ msg: 'database error', err: err });
			
			return res.json({
				success: true
			});
		});
		
	});
}