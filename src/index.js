import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const TreesContext = createContext();

const trees = [
  {id: '1', type: 'Maple'},
  {id: '2', type: 'Oak'},
  {id: '3', type: 'Family'},
  {id: '4', type: 'Component'}
];

ReactDOM.render(
  <TreesContext.Provider value={{trees}}>
    <App />
  </TreesContext.Provider>,
  document.getElementById('root')
);