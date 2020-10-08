import React from 'react';

import logo from '../../assets/logo.svg';
import styles from './Home.module.sass';

const Home: React.FC = () => {
  return(
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <img className={styles.logo} src={logo} alt="logo with clouds" />
        <h3>What's the weather?</h3>
      </header>
      <section className={styles.pageSearch}>
        <h1>Get weather information for any city you want</h1>
        <form>
          <input type="text" placeholder="Enter the city name" />
          <button type="submit">Search</button>
        </form>
      </section>
      <section className={styles.pageCards}>
        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <span>London</span>
            <span>GB</span>
          </header>
          <div className={styles.cardMain}>
            <img src="https://cdn0.iconfinder.com/data/icons/weather-forecast-17/128/forecast-weather_rain-heavy-drizzle-512.png" />
            <div>
              <span>280°F</span>
              <span>Drizzle</span>
              <span>Light intensity drizzle</span>
            </div>
          </div>
          <div className={styles.cardDetails}>
            <div>
              <span>Max temp: 281°F</span>
              <span>Min temp: 279°F</span>
            </div>
            <div>
              <span>Humidity: 81%</span>
              <span>Wind speed: 4.1km/h</span>
            </div>
          </div>
        </article>
      </section>
      <footer className={styles.pageFooter}>
        <p>Made by <a href="https://github.com/giovcandido" rel="noopener noreferrer" target="_blank">Giovani Candido</a></p>
      </footer>
    </div>
  );
};

export default Home;