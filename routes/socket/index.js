var keystone = require('keystone');
var types = require('../../app/actions/types');

exports = module.exports = function(){
	var io = keystone.get('io');

	var expressSession = keystone.expressSession;
	io.use(function(socket, next){
		expressSession(socket.handshake, {}, function() {
			var userID = socket.handshake.session.userId;

			if (userID){
				keystone.list('User').model.findOne({ _id: userID }).select('-password').exec(function(err, user) {
					socket.handshake.session.user = user;
					
					next();
				});
			}else{
				next();
			}
		} );
	});

	io.on('connect', function(socket){

		console.log('--- User connected');
		// socket.emit('action', { type: 'WS_WELCOME', data: 'Welcome!' });

		socket.on('action', function(action) {
			// console.log(socket.handshake.session);


			switch (action.type) {
				case types.WS_PING:
		            console.log(types.WS_PING + '  ✨  ', action.data);
		            return socket.emit('action', { type: types.WS_PONG, data:'Thanks! Have a good day! ' + (socket.handshake.session.userId || '') + ' ' + Math.random() });
		        default:
		            return socket.emit('action', { type: types.WS_404, data:'cannot find stuff~' });
		    }
		});

	    socket.on('disconnect', function(){
	        console.log('--- User disconnected');
	    });

	});


};
