import React from 'react';

const Home: React.FC = () => {
  return(
    <div>
      <header>
        <h1>What's the weather?</h1>
      </header>
      <section>
        <form>
          <input type="text" placeholder="Enter a city name" />
          <button type="submit">Search</button>
        </form>
      </section>
      <section>
        <h2>City cards here:</h2>
      </section>
      <footer>
        <p>Made by <a href="https://github.com/giovcandido" rel="noopener noreferrer" target="_blank">Giovani Candido</a></p>
      </footer>
    </div>
  );
};

export default Home;