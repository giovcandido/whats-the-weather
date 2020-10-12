import React, { FormEvent, useEffect, useState } from 'react';
import {BiSearchAlt} from 'react-icons/bi';

import fetchCurrentWeather from '../../services/api';
import ICurrentWeatherData from '../../shared/interfaces/ICurrentWeatherData';

import useDarkThemeState from '../../shared/hooks/useDarkThemeState';

import ThemeContainer from '../../components/ThemeContainer/ThemeContainer';
import ThemeButton from '../../components/ThemeButton/ThemeButton';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import WeatherCard from '../../components/WeatherCard/WeatherCard';

import logo from '../../assets/logo.svg';
import styles from './Home.module.sass';

const Home: React.FC = () => {
  const [cityName, setCityName] = useState<string>('');
  const [citiesWeatherData, setCitiesWeatherData] = useState<ICurrentWeatherData[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleCitySearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if(!cityName){
      setErrorMessage('Type the name of the city to be searched. Ex: New York.');
      return;
    }

    try{
      const response = await fetchCurrentWeather(cityName, 'metric');
    
      const data: ICurrentWeatherData = response.data;

      setCitiesWeatherData([data, ...citiesWeatherData]);

      setCityName('');
      setErrorMessage('');
    }catch(err){
      switch(err.response.status){
        case 401:
          setErrorMessage('Make sure you are using a valid API key.');
          break;
        case 404:
          setErrorMessage('No city with the specified name was found.');
          break;
        case 429:
          setErrorMessage('You have made too much requests. Try again in a hour.');
          break;
      }
    }
  }

  const handleErrorClosing = () => {
    setErrorMessage('');
  }

  const [darkTheme, setDarkTheme] = useDarkThemeState(true);
  
  const handleThemeChange = () => {
    setDarkTheme(!darkTheme);
  }

  useEffect(() => {
    localStorage.setItem('@whats-the-weather:Dark', JSON.stringify(darkTheme));
  }, [darkTheme]);

  return(
    <ThemeContainer dark={darkTheme}>
      <div className={styles.pageContainer}>
        <header className={styles.pageHeader}>
          <div className={styles.logo}>
            <img src={logo} alt="logo with clouds" />
            <h3>What's the weather?</h3>
          </div>
          <div className={styles.settings}>
            <ThemeButton dark={darkTheme} onThemeChange={handleThemeChange}/>
          </div>
        </header>
        <section className={styles.pageSearch}>
          <h1>Get weather information for any city you want</h1>
          <form onSubmit={handleCitySearch}>
            <input type="text" placeholder="Enter the city name" value={cityName} onChange={(e) => setCityName(e.target.value)} />
            <button type="submit"><BiSearchAlt /></button>
          </form>
        </section>
        {errorMessage && <ErrorMessage message={errorMessage} closeError={handleErrorClosing} />}
        <section className={styles.pageCards}>
          {citiesWeatherData.map(cityWeatherData => (
            <WeatherCard key={cityWeatherData.name} currentWeatherData={cityWeatherData} />
          ))} 
        </section>
        <footer className={styles.pageFooter}>
          <p>Made by <a href="https://github.com/giovcandido" rel="noopener noreferrer" target="_blank">Giovani Candido</a></p>
        </footer>
      </div>
    </ThemeContainer>
  );
};

export default Home;