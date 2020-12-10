import React, { } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import useFetch from './useFetch';
import propTypes from 'prop-types';

const App = ({ login }) => {
  const { loading, data, error } = useFetch(`http://api.github.com/users/${login}`);
  console.log(data,error);

  if (loading) return (
    <h1>Loading...</h1>
  );
  if (error) return (
    <pre>{JSON.stringify(error, null, 2)}</pre>
  );
  return (
    <div>
      <img src={data.avatar_url} alt={data.login} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>

  );
};

App.propTypes = {
  login: propTypes.string
};

ReactDOM.render(
  <React.StrictMode>
    <App login="alcadeta"/>
  </React.StrictMode>,
  document.getElementById('root')
);