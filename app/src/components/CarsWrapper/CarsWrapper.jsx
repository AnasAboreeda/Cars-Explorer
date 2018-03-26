import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import CarsGrid from '../../components/CarsGrid/CarsGrid';
import './CarsWrapper.css';

const checkRenderModel = (model, activeType) => (model.toLowerCase() === activeType.toLowerCase() || activeType === 'all');

const CarsWrapper = ({ activeType, cars }) => {
  const carsHash = _.groupBy(cars, car => car.type);
  return (
    <div className="cars-container">
      {_.map(carsHash, (modelCars, model) =>
            (checkRenderModel(model, activeType) &&
            <CarsGrid key={_.random(100000)} carsType={model} cars={modelCars} />))
      }
    </div>
  );
};

CarsWrapper.propTypes = {
  activeType: PropTypes.string.isRequired,
  cars: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default CarsWrapper;
