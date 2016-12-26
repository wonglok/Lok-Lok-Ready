import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import socketMiddleware from './socketMiddleware';
import thunk from 'redux-thunk';
import DevTools from '../containers/DevTools';

export default function configureStore(initialState) {
    const store = applyMiddleware(
    	thunk,
		socketMiddleware
    )(createStore)(
        rootReducer,
        initialState,
        DevTools.instrument()
    );
    return store;
}
