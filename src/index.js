import React, { } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useInput } from './useInput';

const App = () => {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}.`);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input 
        {...titleProps}
        type="text" 
        placeholder="Sound..." 
      />
      <input 
        {...colorProps}
        type="color" 
      />
      <button>ADD</button>
    </form>
  );
};

// PropTypes

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);