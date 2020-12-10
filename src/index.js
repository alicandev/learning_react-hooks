import React, { 
  useReducer
  // useState
} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const initialState = {message: 'Hi!'};

const reducer = (state, action) => {
  switch (action.type) {
  case 'yell':
    return {message: `HEY! I just said ${state.message}.`};
  case 'whisper':
    return {message: `excuse me. I just said ${state.message}`};
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({type: 'yell'})}>YELL</button>
      <button onClick={() => dispatch({type: 'whisper'})}>whisper</button>
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