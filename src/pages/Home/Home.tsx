import React, { FormEvent, useEffect, useState } from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import {FaLightbulb, FaRegLightbulb} from 'react-icons/fa';

import fetchCurrentWeather from '../../services/api';

import ITheme from '../../shared/interfaces/ITheme';
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

  const [themeState, setThemeState] = useState<ITheme>({
    dark: true,
    className: 'dark'
  });

  useEffect(() => {
    const theme = localStorage.getItem('@whats-the-weather:Theme');

    if(theme){
      const {dark, className} = JSON.parse(theme);
      
      setThemeState({
        dark,
        className
      });
    }
  }, []);

  const handleThemeChange = () => {
    const dark = !themeState.dark;
    const className = dark ? 'dark' : 'light';

    setThemeState({
      dark,
      className
    });
  }

  return(
    <div className={`${themeState.className}`}>
      <div className={styles.pageContainer}>
        <header className={styles.pageHeader}>
          <div className={styles.logo}>
            <img src={logo} alt="logo with clouds" />
            <h3>What's the weather?</h3>
          </div>
          <button onClick={handleThemeChange}>
            {themeState.dark ? <FaLightbulb size={15} /> : <FaRegLightbulb size={15} />}
          </button>
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
    </div>
  );
};

export default Home;