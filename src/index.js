import React, { 
  useState
} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const [sound, setSound] = useState('');
  const [color, setColor] = useState('#000000');

  const submit = (e) => {
    e.preventDefault();
    alert(`${sound} sounds like ${color}.`);
    setSound('');
    setColor('#000000');
  };

  return (
    <form onSubmit={submit}>
      <input 
        value={sound} 
        type="text" 
        placeholder="Sound..." 
        onChange={(e) => setSound(e.target.value)}
      />
      <input 
        value={color} 
        type="color" 
        onChange={(e) => setColor(e.target.value)}
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