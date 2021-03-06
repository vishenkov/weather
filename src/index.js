import { defaultService } from './services';

export default class Weather {
  constructor({ service = defaultService }) {
    this.service = service;
  }

  async getCityWeather(city = '') {
    const weather = await this.service.fetchCityWeather(city);
    return weather;
  }
}
