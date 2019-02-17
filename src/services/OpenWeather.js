import BaseService from './BaseService';

const baseUrl = 'https://samples.openweathermap.org/data/2.5/weather';
export default class OpenWeather extends BaseService {
  async fetchData(query) {
    const { data = {} } = await this.lib.get(new URL(baseUrl).toString(), {
      params: {
        q: query,
        appid: 'b6907d289e10d714a6e88b30761fae22',
      },
    });

    return data;
  }

  formatData = (rawWeather = {}) => ({
    temp: rawWeather.main.temp,
    minTemp: rawWeather.main.temp_min,
    maxTemp: rawWeather.main.temp_max,
  });
}
