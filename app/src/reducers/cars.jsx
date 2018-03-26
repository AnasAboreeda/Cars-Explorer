import { LOAD_CARS, LOAD_CARS_SUCCESS, LOAD_CARS_FAIL, SHOW_SPINNER, CHANGE_ACTIVE_TYPE } from '../actions/cars';
import initialState from './initialState';

const cars = (state = initialState.cars, action) => {
  switch (action.type) {
    case LOAD_CARS:
    case SHOW_SPINNER:
      return Object.assign({}, state, { isLoading: true, error: false });
    case LOAD_CARS_SUCCESS:
      return Object.assign({}, state, { isLoading: false, error: false, cars: action.cars });
    case LOAD_CARS_FAIL:
      return Object.assign(
        {}, state,
        { isLoading: false, error: true, errorMessage: action.message },
      );
    case CHANGE_ACTIVE_TYPE:
      return Object.assign({}, state, { activeType: action.carType });
    default:
      return state;
  }
};

export default cars;
