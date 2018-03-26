import CarApi from './../../util/CarApi';

test('Should get cars as an array', async () => {
  expect.assertions(1);
  const data = await CarApi.getAllCars();
  expect(Array.isArray(data)).toBe(true);
});
