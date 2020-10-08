import React, { FormEvent, useState } from 'react';

// import fetchCurrentWeather from '../../services/api';
import ICurrentWeatherData from '../../shared/interfaces/ICurrentWeatherData';

import logo from '../../assets/logo.svg';
import styles from './Home.module.sass';
import fetchCurrentWeather from '../../services/api';

const Home: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [newCityWeather, setNewCityWeather] = useState<ICurrentWeatherData>();

  const handleCitySearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try{
      const response = await fetchCurrentWeather(city, 'metric');

      const data: ICurrentWeatherData = response.data;

      setNewCityWeather(data);
    }catch(err){
      console.log(err);
    }
  }

  return(
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <img className={styles.logo} src={logo} alt="logo with clouds" />
        <h3>What's the weather?</h3>
      </header>
      <section className={styles.pageSearch}>
        <h1>Get weather information for any city you want</h1>
        <form onSubmit={handleCitySearch}>
          <input type="text" placeholder="Enter the city name" value={city} onChange={(e) => setCity(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      </section>
      <section className={styles.pageCards}>
        {newCityWeather && (
          <article className={styles.card}>
            <header className={styles.cardHeader}>
              <span>{newCityWeather.name}</span>
              <span>{newCityWeather.sys.country}</span>
            </header>
            <div className={styles.cardMain}>
              <div className={styles.cardTemp}>
                <img src={`http://openweathermap.org/img/w/${newCityWeather.weather[0].icon}.png`} alt="weather icon" />
                <span>{newCityWeather.main.temp}°C</span>
              </div>                
              <span>Feels like: {newCityWeather.main.feels_like}°C</span>
              <span>{newCityWeather.weather[0].main}: {newCityWeather.weather[0].description}</span>
            </div>
            <div className={styles.cardDetails}>
              <div>
                <span>Max temp: {newCityWeather.main.temp_max}°C</span>
                <span>Min temp: {newCityWeather.main.temp_min}°C</span>
              </div>
              <div>
                <span>Humidity: {newCityWeather.main.humidity}%</span>
                <span>Wind speed: {newCityWeather.wind.speed}km/h</span>
              </div>
            </div>
          </article>
        )} 
      </section>
      <footer className={styles.pageFooter}>
        <p>Made by <a href="https://github.com/giovcandido" rel="noopener noreferrer" target="_blank">Giovani Candido</a></p>
      </footer>
    </div>
  );
};

export default Home;