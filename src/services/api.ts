import axios from 'axios';

import config from '../config/config';

const api = axios.create({
  baseURL: config.api.baseURL,
  params: {
    appid: config.api.appid
  }
});

const fetchCurrentWeather = async (city: string, units: string) => {
  const response = await api.get(`/weather?q=${city}&units=${units}`);

  return response;
}

export default fetchCurrentWeather;