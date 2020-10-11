import React from 'react';

import ICurrentWeatherData from '../../shared/interfaces/ICurrentWeatherData';

import styles from './WeatherCard.module.sass';

interface IWeatherCardProps{
  currentWeatherData: ICurrentWeatherData;
}

const WeatherCard: React.FC<IWeatherCardProps> = ({currentWeatherData}) => {
  const {name, sys, main, weather, wind} = currentWeatherData;

  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        <span>{name}</span>
        <span>{sys.country}</span>
      </header>
      <div className={styles.cardMain}>
        <div className={styles.cardTemp}>
          <img src={`https://openweathermap.org/img/w/${weather[0].icon}.png`} alt="weather icon" />
          <span>{main.temp}°C</span>
        </div>                
        <span>Feels like: {main.feels_like}°C</span>
        <span>{weather[0].main}: {weather[0].description}</span>
      </div>
      <div className={styles.cardDetails}>
        <div>
          <span>Max temp: {main.temp_max}°C</span>
          <span>Min temp: {main.temp_min}°C</span>
        </div>
        <div>
          <span>Humidity: {main.humidity}%</span>
          <span>Wind speed: {wind.speed}km/h</span>
        </div>
      </div>
    </article>
  );
}

export default WeatherCard;