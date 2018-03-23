import fs from 'fs';
import path from 'path';

const readCarsData = () => {
  try {
    const CARS_FILE = path.join(__dirname, './../data/intl.json');
    let carsData = fs.readFileSync(CARS_FILE);
    carsData = JSON.parse(carsData);
    return carsData;
  } catch (err) {
    throw new Error('Error reading cars data', err);
  }
};

const getCars = () => {
  const carsData = readCarsData();
  const cars = (((((carsData || {}).json || {}).products || {}).cars || [])[0] || {}).main;
  return cars;
};

export default getCars;
