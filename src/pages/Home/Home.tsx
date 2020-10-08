import React from 'react';

import styles from './Home.module.sass';

const Home: React.FC = () => {
  return(
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <h3>What's the weather?</h3>
      </header>
      <section className={styles.pageSearch}>
        <h2>Get weather information for any city you want</h2>
        <form>
          <input type="text" placeholder="Enter a city name" />
          <button type="submit">Search</button>
        </form>
      </section>
      <section className={styles.pageContent}>
        <section className={styles.pageCards}>
          <h2>City cards here:</h2>
        </section>
      </section>
      <footer className={styles.pageFooter}>
        <p>Made by <a href="https://github.com/giovcandido" rel="noopener noreferrer" target="_blank">Giovani Candido</a></p>
      </footer>
    </div>
  );
};

export default Home;