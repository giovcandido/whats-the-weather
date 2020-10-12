import React, { FormEvent, useState } from 'react';
import {BiSearchAlt} from 'react-icons/bi';

import fetchCurrentWeather from '../../services/api';
import ICurrentWeatherData from '../../shared/interfaces/ICurrentWeatherData';

import useDarkThemeState from '../../shared/hooks/useDarkThemeState';

import PageHeader from '../../components/PageHeader/PageHeader'; 
import ThemeContainer from '../../components/ThemeContainer/ThemeContainer';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import PageFooter from '../../components/PageFooter/PageFooter';

import styles from './Home.module.sass';

const Home: React.FC = () => {
  const [darkTheme, setDarkTheme] = useDarkThemeState(true);
  
  const [cityName, setCityName] = useState<string>('');
  const [allWeatherData, setAllWeatherData] = useState<ICurrentWeatherData[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleCitySearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if(!cityName){
      setErrorMessage('Type the name of the city to be searched. Ex: New York.');
      return;
    }

    try{
      const data = await fetchCurrentWeather(cityName, 'metric');
    
      setAllWeatherData([data, ...allWeatherData]);

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

  return(
    <ThemeContainer dark={darkTheme}>
      <div className="pageContainer">
        <PageHeader darkTheme={darkTheme} onThemeChange={() => setDarkTheme(!darkTheme)} />

        <section className={styles.pageSearch}>
          <h1>Get weather information for any city you want</h1>
          <form onSubmit={handleCitySearch}>
            <input type="text" placeholder="Enter the city name" value={cityName} onChange={(e) => setCityName(e.target.value)} />
            <button type="submit"><BiSearchAlt /></button>
          </form>
        </section>

        {errorMessage && <ErrorMessage message={errorMessage} closeError={() => setErrorMessage('')} />}
        
        <section className={styles.pageCards}>
          {allWeatherData.map(weatherData => (
            <WeatherCard key={weatherData.name} weatherData={weatherData} />
          ))} 
        </section>

        <PageFooter />
      </div>
    </ThemeContainer>
  );
};

export default Home;