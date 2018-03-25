import React from 'react';
import PropTypes from 'prop-types';
import { PropagateLoader } from 'react-spinners';
import './Spinner.css';

const Spinner = ({ isLoading }) => (
  <div className="spinner">
    <PropagateLoader
      color="#65666A"
      loading={isLoading}
    />
  </div>
);

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Spinner;
