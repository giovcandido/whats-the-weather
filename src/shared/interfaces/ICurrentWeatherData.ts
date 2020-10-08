interface ICurrentWeatherData{
  name: string;
  sys: {
    country: string;
  }
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    //feels_like: number;
    humidity: number;
  },
  weather: {
    icon: number;
    main: string;
    description: string;
  }[]
  wind: {
    speed: number;
  }
}

export default ICurrentWeatherData;