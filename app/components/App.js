import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = ({ children }) =>
    <div>
        <h1>Welcome~!</h1>
         <nav>
            <Link to="/" >Filterable Table</Link>
            <Link to="/about" >About</Link>
            <Link to="/wsDemo" >WebSocket Demo</Link>
            <Link to="/auth" >Login Form</Link>
            <Link to="/posts" >Posts</Link>
         </nav>
        { children }
       
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
