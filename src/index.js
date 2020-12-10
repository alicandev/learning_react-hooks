import React, { 
  useReducer
} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const [ number, setNumber ] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );
  return <h1 onClick={() => setNumber(1)}>{number}</h1>;
};

// PropTypes

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);