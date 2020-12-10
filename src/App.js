import React, { useContext } from 'react';
import './App.css';
import { TreesContext } from './';

const App = () => {
  const { trees } = useContext(TreesContext);
  return (
    <div>
      <h1>Trees I&apos;ve heard of</h1>
      <ul>
        {trees.map(tree => <li key={tree.id}>{tree.type}</li>)} 
      </ul>
    </div>
  );
};

export default App;
