import * as services from '.';
import MetaWeather from './MetaWeather';

export const defaultService = MetaWeather;

export default (serviceName) => services[serviceName] ? services[serviceName] : defaultService;
