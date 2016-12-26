import * as types from '../actions/types';
import createSocketIoMiddleware from 'redux-socket.io';
import socket from './socket';

let socketIoMiddleware = createSocketIoMiddleware(socket, [types.UP_PREFIX]);

export default socketIoMiddleware;
