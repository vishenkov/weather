import axios from 'axios';

export default class OpenWeather {
  constructor({ lib = axios, apiKey = '' }) {
    this.lib = lib;
    this.apiKey = apiKey;
  }

  async fetchCityWeather(city = '') {
    const rawWeather = await this.fetchData(city);
    return this.formatData(rawWeather);
  }
}
