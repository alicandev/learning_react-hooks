import React, { 
  useEffect,
  useState,
  // useEffect
} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const [data, setData] = useState([]);
  console.log(data, setData);

  useEffect(() =>{
    fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (data) {
    return (
      <div>
        <ul>
          {data.map(user => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
        <button onClick={() => setData([])}>Remove Data</button>
      </div>
    );
  }

  return <p>No Users</p>;
};

// PropTypes

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);