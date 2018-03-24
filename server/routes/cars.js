import express from 'express';
import getCars from './../modules/cars';

const carsApi = express.Router();

/**
 * Title : Get cars.
 * URL : /api/cars
 * Method : GET
 * Response Codes: Success (200 OK), Server Error (500)
 * */
carsApi.get('/cars', (req, res) => {
  const cars = getCars();

  res.setHeader('Cache-Control', 'no-cache');
  res.json(cars);
});

export default carsApi;
