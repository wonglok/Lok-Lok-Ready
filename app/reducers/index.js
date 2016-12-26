import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';
import * as ws from './WebSocket';
import rest from '../actions/rest';

const filter = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};

const auth = (state = { me: null }, action) => {
	let newObj = null;
	switch (action.type) {
        case types.ME_REQ:
            newObj = { ...state, status:action.type, loading: true, me: null, error: null  };
            return newObj;
        case types.ME_OK:
            newObj = { ...state, status:action.type, loading: false, me: action.me, error: null };
            return newObj;
        case types.ME_FAIL:
            newObj = { ...state, status:action.type, loading: false, me: null, error: null };
            return newObj;

        case types.LOGIN_REQ:
        	newObj = { ...state, status:action.type, loading: true, me: null, error: null  };
            return newObj;
        case types.LOGIN_OK:
        	newObj = { ...state, status:action.type, loading: false, me: action.me, error: null };
        	return newObj;
        case types.LOGIN_FAIL:
        	newObj = { ...state, status:action.type, loading: false, me: null, error: action.error };
            return newObj;

        case types.LOGOUT_REQ:
        	newObj = { ...state, status:action.type, loading: true, me: null, error: null };
            return newObj;
        case types.LOGOUT_OK:
        	newObj = { ...state, status:action.type, loading: false, me: null, error: null };
            return newObj;
        
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    ...rest.reducers,
    auth,
    filter,
    routing,
    wsdemo: ws.wsdemo
});

export default rootReducer;
