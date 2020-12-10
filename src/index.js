import React, { 
  useReducer
  // useState
} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const [checked, toggleChecked] = useReducer(checked => !checked, false);

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => toggleChecked()}
      />
      {checked ? 'checked' : 'not checked'}
    </>
  );
};

// PropTypes

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);