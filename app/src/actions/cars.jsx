import CarApi from './../util/CarApi';

export const LOAD_CARS = 'loadCars';
export const LOAD_CARS_SUCCESS = 'loadCarsSuccess';
export const LOAD_CARS_FAIL = 'loadCarsFail';
export const SHOW_SPINNER = 'showSpinner';

export const loadCarsSuccess = cars => ({ type: LOAD_CARS_SUCCESS, cars });
export const loadCarsFail = message => ({ type: LOAD_CARS_FAIL, message });
export const showSpinner = () => ({ type: SHOW_SPINNER });

export const loadCars = () => (dispatch) => {
  dispatch(showSpinner());
  CarApi.getAllCars()
    .then((cars) => {
      dispatch(loadCarsSuccess(cars));
    })
    .catch((error) => {
      console.error('error in getAllCars', error);
      dispatch(loadCarsFail('Make sure you are connected to the server!'));
    });
  return { type: LOAD_CARS };
};

