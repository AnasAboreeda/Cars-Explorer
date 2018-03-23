import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

import getCars from './modules/cars';

const app = express();

app.set('port', (process.env.PORT || 4567));

app.use('/', express.static(path.join(__dirname, 'docs/')));
app.use(bodyParser.json());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  next();
});

app.use(morgan('dev'));
app.use(cors());

app.listen(app.get('port'), () => {
  console.log(`Server started: http://localhost:${app.get('port')}/`);
});

/**
 * Title : Get cars.
 * URL : /api/cars
 * Method : GET
 * Response Codes: Success (200 OK), Server Error (500)
 * */
app.get('/api/cars', (req, res) => {
  const cars = getCars();
  console.log('cars', cars);

  res.setHeader('Cache-Control', 'no-cache');
  res.json(cars);
});
