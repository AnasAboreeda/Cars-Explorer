import fetch from 'isomorphic-fetch';

class CarApi {
  static getAllCars() {
    return fetch('http://localhost:4567/api/cars')
      .then((response) => {
        if (response.status >= 400) {
          return Promise.reject(new Error('Error in receiving data'));
        }
        return response.json();
      })
      .catch(error => Promise.reject(new Error('Server error!', error)));
  }
}

export default CarApi;
