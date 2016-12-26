import * as types from '../../actions/types';

export const wsdemo = (state = {
	ask: null,
	ans: null
}, action) => {
    let newObj = null;
    switch (action.type) {
    	case types.WS_PING:
            newObj = { ...state, status: 'loadiong', ask: action.data };
            delete newObj.error;
            return newObj;
        case types.WS_PONG:
            newObj = { ...state, status: 'ok', ans: action.data };
            delete newObj.error;
            return newObj;
        case types.WS_404:
            return { ...state, status: 'error', type: types.WS_404, error: action.data };
        default:
            return state;
    }
};







