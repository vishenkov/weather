import axios from 'axios';

const baseUrl = 'https://www.metaweather.com/api/location/';
export default class MetaWeather {
  constructor({ lib = axios }) {
    this.lib = lib;
  }

  async fetchData(query) {
    const { data } = await this.lib.get(new URL(`${baseUrl}search`).toString(), {
      params: {
        query
      }
    });

    const { woeid } = data[0];
    const { data: weatherData } = await this.lib.get(new URL(`${baseUrl}${woeid}`).toString());

    return weatherData;
  }

  formatData (rawWeather = {}) {
    return ({
      temp: rawWeather.consolidated_weather[0].the_temp,
      minTemp: rawWeather.consolidated_weather[0].min_temp,
      maxTemp: rawWeather.consolidated_weather[0].max_temp,
    });
  }

  async fetchCityWeather(city = '') {
    const rawWeather = await this.fetchData(city);
    return this.formatData(rawWeather);
  }
}
