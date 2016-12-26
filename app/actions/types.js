exports.FILTER = 'FILTER';

exports.UP_PREFIX = 'WSUP/';
exports.DN_PREFIX = 'WSDN/';
exports.REST_PREFIX = 'REST-';


exports.WS_SYNC_REQ = exports.UP_PREFIX + 'WS_SYNC_REQ';
exports.WS_SYNC_RES = exports.DN_PREFIX + 'WS_SYNC_RES';

exports.WS_PING = exports.UP_PREFIX + 'WS_PING';
exports.WS_PONG = exports.DN_PREFIX + 'WS_PONG';
exports.WS_404  = exports.DN_PREFIX + 'WS_404';


exports.ME_REQ = exports.REST_PREFIX + 'ME_REQ';
exports.ME_OK = exports.REST_PREFIX + 'ME_OK';
exports.ME_FAIL = exports.REST_PREFIX + 'ME_FAIL';

exports.LOGIN_REQ = exports.REST_PREFIX + 'LOGIN_REQ';
exports.LOGIN_OK = exports.REST_PREFIX + 'LOGIN_OK';
exports.LOGIN_FAIL = exports.REST_PREFIX + 'LOGIN_FAIL';

exports.LOGOUT_REQ = exports.REST_PREFIX + 'LOGOUT_REQ';
exports.LOGOUT_OK = exports.REST_PREFIX + 'LOGOUT_OK';



