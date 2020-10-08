import axios from 'axios';

import config from '../config/config';

const api = axios.create({
  baseURL: config.api.baseURL,
  params: {
    appid: config.api.appid
  }
});

const fetchCurrentWeather = async (city: string) => {
  const response = await api.get(`/weather?q=${city}`);

  return response;
}

export default fetchCurrentWeather;