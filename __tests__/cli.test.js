import fs from 'fs';
import _ from 'lodash/fp';
import cli from '../src/cli';

const basePath = './__tests__/__fixtures__/';

const getMock = response => ({
  get: () => ({ data: _.cloneDeep(response) }),
});

const readFile = filename => JSON.parse(fs.readFileSync(`${basePath}${filename}`, 'utf8'));


describe('weather cli test', () => {
  test('Should return current location for empty argument', async () => {
    const libResponse = readFile('openWeather.json');
    const libMock = getMock(libResponse);

    const result = await cli('OpenWeather', 'london', { lib: libMock });
    expect(result).toEqual({ temp: 280.32, minTemp: 279.15, maxTemp: 281.15 });
  });
});
