import request from 'supertest';
import { assert } from 'chai';

const port = process.env.PORT || 4567;
const apiUrl = `localhost:${port}/api`;
const agent = request(apiUrl);

describe('Server Tests', () => {
  it('Should return cars array', (done) => {
    agent
      .get('/cars')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        assert.equal(res.status, 200, 'res.status equal to 200');
        assert.equal(Array.isArray(res.body), true, 'Cars should be an array');
        return done();
      });
  });
});
