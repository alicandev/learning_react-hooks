import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const App = ({ name }) => (
  <div className="App">
    <h1>Hello {name}!</h1>
  </div>
);

App.propTypes = {
  name: PropTypes.string.isRequired
};

export default App;
