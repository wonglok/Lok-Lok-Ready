var keystone = require('keystone');



exports.signin = function (req, res) {
  
  if (!req.body.email || !req.body.password) return res.status(401).json({ success: false });
  
  keystone.list('User').model.findOne({ email: req.body.email }).exec(function(err, user) {
    
    if (err || !user) {
      return res.status(401).json({
        success: false,
        session: false,
        message: (err && err.message ? err.message : false) || 'Sorry, there was an issue signing you in, please try again.'
      });
    }
    
    keystone.session.signin({ email: user.email, password: req.body.password }, req, res, function(user) {
      
      // console.log(req.session);

      return res.status(200).json({
        success: true,
        date: new Date().getTime(),
        me: {
          id: user.id,
          name: user.name,
          isAdmin: user.isAdmin,
          email: user.email
        }
      });
      
    }, function(err) {
      
      return res.status(401).json({
        success: false,
        session: false,
        message: (err && err.message ? err.message : false) || 'Sorry, there was an issue signing you in, please try again.'
      });
      
    });
    
  });
};

// you'll want one for signout too
exports.signout = function (req, res) {
  keystone.session.signout(req, res, function() {
    res.status(200).json({ 'signedout': true });
  });
};

exports.checkAuth = function (req, res, next) {
  // you could check user permissions here too
  if (req.user) return next();
  return res.status(403).json({ 'error': 'no access' });
};









