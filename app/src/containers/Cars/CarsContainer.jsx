import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { store } from './../../index';
import { loadCars, changeActiveType } from './../../actions/cars';
import Spinner from './../../components/Spinner/Spinner';
import NavFilter from './../../components/NavFilter/NavFilter';
import CarsWrapper from './../../components/CarsWrapper/CarsWrapper';

const handleChangeActiveType = type => () => {
  store.dispatch(changeActiveType(type));
};

class CarsContainer extends Component {
  componentDidMount() {
    store.dispatch(loadCars());
  }

  render() {
    return (
      <div>
        {this.props.isLoading && <Spinner isLoading />}
        {this.props.error ?
           toast(this.props.errorMessage) :
           <div>
             <NavFilter
               types={this.props.types}
               activeType={this.props.activeType}
               changeActiveType={handleChangeActiveType}
             />
             <CarsWrapper activeType={this.props.activeType} cars={this.props.cars} />
           </div>
          }

      </div>
    );
  }
}

CarsContainer.propTypes = {
  types: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  activeType: PropTypes.string.isRequired,
  cars: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  error: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const types = _.uniq(state.cars.cars.map(car => car.type));
  return ({
    types,
    activeType: state.cars.activeType,
    cars: state.cars.cars,
    isLoading: state.cars.isLoading,
    error: state.cars.error,
    errorMessage: state.cars.errorMessage,
  });
};

export default connect(mapStateToProps)(CarsContainer);

