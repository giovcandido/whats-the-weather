import React, { FormEvent, useState } from 'react';
import {BiSearchAlt} from 'react-icons/bi';

import fetchCurrentWeather from '../../services/api';
import ICurrentWeatherData from '../../shared/interfaces/ICurrentWeatherData';

import WeatherCard from '../../components/WeatherCard/WeatherCard';

import logo from '../../assets/logo.svg';
import styles from './Home.module.sass';

const Home: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [citiesWeatherData, setCitiesWeatherData] = useState<ICurrentWeatherData[]>([]);

  const handleCitySearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try{
      const response = await fetchCurrentWeather(city, 'metric');

      const data: ICurrentWeatherData = response.data;

      setCitiesWeatherData([data, ...citiesWeatherData]);

      setCity('');
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
          <button type="submit"><BiSearchAlt size={20} /></button>
        </form>
      </section>
      <section className={styles.pageCards}>
        {citiesWeatherData.map(cityWeatherData => (
          <WeatherCard key={cityWeatherData.name} currentWeatherData={cityWeatherData} />
        ))} 
      </section>
      <footer className={styles.pageFooter}>
        <p>Made by <a href="https://github.com/giovcandido" rel="noopener noreferrer" target="_blank">Giovani Candido</a></p>
      </footer>
    </div>
  );
};

export default Home;