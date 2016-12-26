var keystone = require('keystone');
var socketio = require('socket.io');
var startSocket = require('./routes/socket');

keystone.init({

	'wysiwyg images': true,

	'name': 'Lok Lok',
	'brand': 'Lok Lok App',

	// 'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	
	'views': 'templates/views',
	'view engine': 'handlebars',

	'session store': 'mongo',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': process.env.COOKIE_SECRET || 'c1bcb91c188951a35db6ce6aa76676a22a0169b584994c8e8b7da3b4091de37c238d7f01072772857cc34a95a08c2c3ded701b102560da18939672c213272c31',

	mongo: process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://localhost/lok-lok-app'
});

keystone.import('models');

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

keystone.set('routes', require('./routes'));
keystone.set('nav', {
	'users': 'users',
	posts: ['posts', 'post-categories'],
	galleries: 'galleries'
});

keystone.set('s3 config', {
	bucket: process.env.S3_BUCKET,
	key: process.env.S3_KEY,
	secret: process.env.S3_SECRET
});

keystone.set('cloudinary config', process.env.CLOUDINARY_URL);

keystone.start({
    onHttpServerCreated: function(){
        keystone.set('io', socketio.listen(keystone.httpServer));
    },
    onStart: function(){
    	startSocket();
    }
});

