import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [checked, setChecked] = useState('false');
  return (
    <div>
      <input type="checkbox" value={checked} onClick={() => setChecked(!checked)}/>
      <p>{checked ? 'checked' : 'not checked'}</p>
    </div>
  );
}

ReactDOM.render(
  <React>
    <App />
  </React>,
  document.getElementById('root')
);