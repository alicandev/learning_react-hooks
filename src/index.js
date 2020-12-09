import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

const createArray = (length) => (
  [...Array(length)]
);

const Star = ({ selected = false })  => (
  <FaStar color={selected ? 'red' : 'grey'}/>
);

const StarRating = ({ totalStars = 5 }) => (
  createArray(totalStars).map((n,i) => 
    (<Star key={i} />)
  )
);

const App = () => (
  <StarRating totalStars={10} />
);

StarRating.propTypes = {
  totalStars: PropTypes.number.isRequired
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);