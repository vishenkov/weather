import _ from 'lodash';
import Weather from '.';
import getService from './services';

export default async (serviceName = 'MetaWeather', city = '', { lib, render = _.identity } = {}) => {
  const Service = getService(serviceName);
  const service = new Service({ lib });
  const weather = new Weather({ service });
  const cityWeather = await weather.getCityWeather(city);
  return render(cityWeather);
};
