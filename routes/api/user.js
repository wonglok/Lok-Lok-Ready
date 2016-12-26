var async = require('async'),
	keystone = require('keystone');


/**
 * List Posts
 */
exports.me = function(req, res) {
	if (!req.user) return res.status(401).send({ msg: 'require login', err: err });
	
	res.json({
		me: {
			id: req.user.id,
			name: req.user.name,
			isAdmin: req.user.isAdmin,
			email: req.user.email,
		}
	});
}