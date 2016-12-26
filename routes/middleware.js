/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */
// var keystone = require('keystone');
// var _ = require('lodash');

/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		res.status(401);
		res.send({ msg: 'require user' });
	} else {
		next();
	}
};



exports.requireAdmin = function (req, res, next){
	if (!req.user || !req.user.isAdmin) {
		res.status(402);
		res.send({ msg: 'require admin' });
	} else {
		next();
	}
}

