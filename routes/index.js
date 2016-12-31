// var babelify = require('babelify');
// var browserify = require('browserify-middleware');
var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

var _ = require('underscore');

var routes = {
	api: importRoutes('./api')
};

// Setup Route Bindings
exports = module.exports = function(app) {

	// app.use('/js', browserify('./client/scripts', {
	// 	transform: [babelify.configure({
	// 		plugins: ['object-assign']
	// 	})]
	// }));

	// app.use(function(req, res, next){
	// 	if (req.user && req.user.id){
	// 		req.session.user = req.session.user || {
	// 			id: req.user.id,
	// 			name: req.user.name,
	// 			isAdmin: req.user.isAdmin,
	// 		};
	// 	}else{
	// 		req.session.user = undefined;
	// 	}
	// 	next();
	// });

	app.all('/api*', keystone.middleware.api);

	app.get('/api/me', middleware.requireUser, routes.api.user.me);

	app.get('/api/posts', routes.api.posts.list);
	app.post('/api/posts', middleware.requireUser, routes.api.posts.create);
	app.get('/api/posts/:id', middleware.requireUser, routes.api.posts.get);
	app.put('/api/posts/:id', middleware.requireUser, routes.api.posts.update);
	app.delete('/api/posts/:id', middleware.requireUser, routes.api.posts.remove);

	app.post('/api/signin', routes.api.auth.signin);
	app.post('/api/signout', routes.api.auth.signout);

	// Views
	app.get('/*', function(req, res) {
		res.locals.meta = {
			desc: 'loklok-ready',
			title: 'loklok-ready'
		};
	 	res.render('index.hbs');
	});
	// app.get('*', routes.views.index);
	
	// app.use(function(req, res) {
	// 	res.render('index');
	// });

};
