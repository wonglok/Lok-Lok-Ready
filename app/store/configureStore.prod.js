import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import socketMiddleware from './socketMiddleware';
import thunk from 'redux-thunk';


export default function configureStore(initialState) {
    const store = applyMiddleware(
    	thunk,
		socketMiddleware
    )(createStore)(
        rootReducer,
        initialState
    );

    return store;
}
