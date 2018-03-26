import React from 'react';
import PropTypes from 'prop-types';
import './CarCard.css';

const CarCard = ({ model, image }) => (
  <div className="car-container">
    <div className="car-model">{model}</div>
    <img className="car-image" src={image} alt={model} />
  </div>
);

CarCard.propTypes = {
  model: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CarCard;
