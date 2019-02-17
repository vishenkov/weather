import _ from 'lodash';
import MetaWeather from './MetaWeather';
import OpenWeather from './OpenWeather';

export const defaultService = MetaWeather;

const services = {
  MetaWeather,
  OpenWeather,
};

export default serviceName => _.get(services, serviceName, defaultService);
