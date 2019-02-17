import Weather from '../src';

const getMockService = response => ({
  fetchCityWeather: () => ({ ...response }),
});


describe('Weather lib test', () => {
  test('Should return current weather info', async () => {
    const response = { temp: 280.32, minTemp: 279.15, maxTemp: 281.15 };
    const service = getMockService(response);

    const weather = new Weather({ service });
    const weatherResponse = await weather.getCityWeather('london');

    expect(weatherResponse).toEqual(response);
  });
});
