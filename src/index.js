import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

const createArray = (length) => (
  [...Array(length)]
);

const Star = ({ selected = false, onSelect })  => (
  <FaStar 
    color={selected ? 'red' : 'grey'}
    onClick={onSelect}
  />
);

const StarRating = ({ totalStars = 5 }) => {
  const [ selectedStars, setSelectedStars ] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n,i) => 
        <Star 
          key={i} 
          selected={selectedStars > i} 
          onSelect={() => setSelectedStars(i + 1)} 
        />
      )}
      <p>{selectedStars} of {totalStars}</p>
    </>
  );
};

const App = () => (
  <StarRating totalStars={10} />
);

// PropTypes
StarRating.propTypes = {
  totalStars: PropTypes.number
};
Star.propTypes = {
  selected: PropTypes.bool,
  onSelect: PropTypes.func
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);