import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import CarCard from './../CarCard/CarCard';
import './CarGrid.css';

const CarsGrid = ({ carsType, cars }) => (
  <section className="cars-grid">
    <div className="cars-grid-title">{carsType}</div>
    {_.map(cars, car => (<CarCard key={_.random(1000000)} model={car.model} image={car.img} />))}
  </section>
);

CarsGrid.propTypes = {
  carsType: PropTypes.string.isRequired,
  cars: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default CarsGrid;
