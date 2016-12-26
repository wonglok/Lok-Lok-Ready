import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AppContainer from './containers/AppContainer';
import FilterableTable from './containers/FilterableTable';
import About from './components/About';
import DemoWebSocketContainer from './containers/DemoWebSocketContainer';
import PostLoader from './containers/PostLoader';
import Auth from './containers/Auth';


export default (
	<Route path="/" component={AppContainer}>
		<IndexRoute component={FilterableTable} />
		<Route path="/about" component={About} />
		<Route path="/wsDemo" component={DemoWebSocketContainer} />
		<Route path="/auth" component={Auth} />
		<Route path="/posts" component={PostLoader} />
	</Route>
);



