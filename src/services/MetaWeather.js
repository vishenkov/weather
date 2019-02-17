import _ from 'lodash';
import BaseService from './BaseService';


const baseUrl = 'https://www.metaweather.com/api/location/';
export default class MetaWeather extends BaseService {
  async fetchData(query) {
    const { data = [] } = await this.lib.get(new URL(`${baseUrl}search`).toString(), {
      params: {
        query,
      },
    });

    const woeid = _.get(data[0], 'woeid');
    const { data: weatherData } = await this.lib.get(new URL(`${baseUrl}${woeid}`).toString());

    return weatherData;
  }

  formatData = (rawWeather = {}) => ({
    temp: rawWeather.consolidated_weather[0].the_temp,
    minTemp: rawWeather.consolidated_weather[0].min_temp,
    maxTemp: rawWeather.consolidated_weather[0].max_temp,
  });
}
