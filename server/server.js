import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import carsApi from './routes/cars';

const app = express();

app.set('port', (process.env.PORT || 4567));

app.use(bodyParser.json());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  next();
});

app.use(morgan('dev'));
app.use(cors());

app.use('/api', carsApi);

app.listen(app.get('port'), () => {
  console.log(`Server started: http://localhost:${app.get('port')}/`);
});
